import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Stripe } from 'stripe'
import * as PaymentIntentService from '../../services/PaymentIntentService'
import cartStore from '../../api/store/cartStore'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { StyledFormButton } from './ShippingDetailsForm.styled'

interface Props {
  onSubmit: Function
  buttonDisabled: boolean
}

const StripeCheckoutForm: React.FC<Props> = observer(({ onSubmit, buttonDisabled }) => {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    let loggedUserDataCopy = JSON.parse(
      JSON.stringify(localStorage.getItem('AuthenticatedCustomer')),
    )
    let loggedUserData

    if (loggedUserDataCopy !== null) {
      loggedUserData = JSON.parse(loggedUserDataCopy)
    }
    cartStore.getProducts(loggedUserData.currentUser.id)
  }, [])

  const stripe = useStripe()
  const elements = useElements()

  const handleChange = async (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };


  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('merggg')
    if (!disabled) {
      setProcessing(true)

      const cardElement = elements!.getElement(CardElement)

      PaymentIntentService.createPaymentIntent(
        cartStore.cart.items.map(
          (item: { _id: any; name: any; price: any; amount: any }) => {
            return {
              id: item._id,
              name: item.name,
              price: item.price,
              quantity: item.amount,
            }
          },
        ),
        'RON',
      )
        .then((res) => {
          console.log('res', res)
          return new Promise((resolve, reject) => {
            if (cardElement) {
              stripe!
                .createPaymentMethod({
                  type: 'card',
                  card: cardElement,
                })
                .then((paymentMethod) => {
                  if (paymentMethod && paymentMethod.paymentMethod) {
                    console.log(paymentMethod)
                    const data = {
                      clientSecret: res.data.client_secret,
                      paymentMethodId: paymentMethod.paymentMethod.id,
                    }
                    resolve(data)
                  }
                })
                .catch((err) => reject(err))
            }
          })
        })
        .then((res: any) => {
          console.log(res)
          return stripe!.confirmCardPayment(res.clientSecret, {
            payment_method: res.paymentMethodId,
          })
        })
        .then((res) => {
          console.log(res.error)
          if (res.error) {
            alert(res.error.message)
            setProcessing(false);
          } else {
            setError(false);
            setProcessing(false);
            setSucceeded(true);
            alert('Payment successful')
            onSubmit()
          }
          setProcessing(false)
        })
    }
  }

  return (
    <div 
      style={{
        textAlign: 'center',
      }}
    >
      <div
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          padding: '10px',
          backgroundColor: 'white',
        }}
      >
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                color: 'black',
                '::placeholder': {
                  color: 'black',
                },
              },
            },
          }}
          onChange={handleChange}
        />
      </div>

      <StyledFormButton
        type="submit"
        onClick={handleSubmit}
        disabled={!stripe || !elements || processing || buttonDisabled || disabled || error || succeeded}
      >
        Pay
      </StyledFormButton>
    </div>
  )
})

export default StripeCheckoutForm
