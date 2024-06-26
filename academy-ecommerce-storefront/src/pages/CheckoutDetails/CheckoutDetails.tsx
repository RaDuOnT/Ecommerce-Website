import React, { useState, useEffect } from 'react'
import OrderSummaryPictures from '../../components/OrderSummaryPictures/OrderSummaryPictures'
import OrderSummaryPrice from '../../components/OrderSummaryPrice/OrderSummaryPrice'
import ShippingDetailsForm from '../../components/ShippingDetailsForm/ShippingDetailsForm'
import {
  StyledCheckoutDetailsContainer,
  StyledOrderSummaryContainer,
} from './CheckoutDetails.styled'
import StripeCheckoutForm from '../../components/ShippingDetailsForm/stripeCheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import  cartStore  from '../../api/store/cartStore'
import { observer } from 'mobx-react'

const CheckoutDetails = observer(() => {
  
  const stripePromise = loadStripe(
    'pk_test_51MRaVIJv052xoepzClE7uwEgKyRJPafbthOVycO30vkcvPT13eMZpGIMt6qBm6PRu01QYmltiWenEFBQi6oOB9Fd00Bwhs9GS6',
  )

  // const cartItems = cartStore.cart.map((item) => {
  //   return {
  //     id: item._id,
  //     name: item.name,
  //     price: item.price,
  //     quantity: item.quantity,
  //   }
  // })

  const [open, setOpen] = useState(false)

  const handleClose = () => {
      setOpen(false)
  }

  return (
    <StyledCheckoutDetailsContainer
      style={{ minHeight: 'calc(100vh - 264px)' }}
    >
      <Elements stripe={stripePromise}>
      <ShippingDetailsForm />
      </Elements>
      
      <StyledOrderSummaryContainer>
        <OrderSummaryPictures />
        <OrderSummaryPrice />
      </StyledOrderSummaryContainer>
    </StyledCheckoutDetailsContainer>
  )
})

export default CheckoutDetails
