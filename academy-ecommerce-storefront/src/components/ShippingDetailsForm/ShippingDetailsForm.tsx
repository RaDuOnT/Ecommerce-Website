import React from "react";
import {
  StyledFormContainer,
  StyledFormTitle,
  StyledInputRow,
  StyledInputWithLabel,
  StyledLabel,
  StyledInput,
  FormButtonsArea,
  StyledFormButton,
} from "./ShippingDetailsForm.styled";
import { observer } from "mobx-react";
import { useState } from "react";
import orderStore from "../../api/store/orderStore";
import { useEffect } from "react";
import cartStore from "../../api/store/cartStore";
import { toJS } from "mobx";
import StripeCheckoutForm from "./stripeCheckoutForm";

const ShippingDetailsForm: React.FC = observer(() => {
  useEffect(() => {
    let loggedUserDataCopy = JSON.parse(
      JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
    );
    let loggedUserData;

    if (loggedUserDataCopy !== null) {
      loggedUserData = JSON.parse(loggedUserDataCopy);
    }
    cartStore.getProducts(loggedUserData.currentUser.id);
  }, []);

  console.log(toJS(cartStore.cart.items));

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    observations: "",
    phone: "",
    country: "",
    city: "",
    zipcode: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    const formDataCopy = { ...formValues, [name]: value };
    if (
      formDataCopy.firstName !== "" &&
      formDataCopy.lastName !== "" &&
      formDataCopy.address !== "" &&
      formDataCopy.phone !== "" &&
      formDataCopy.country !== "" &&
      formDataCopy.city !== "" &&
      formDataCopy.zipcode !== ""
    ) {
      setButtonDisabled(false);
    }
  };

  console.log(formValues);
  console.log(toJS(cartStore.cart.items));

  const submitForm = async () => {
    // get UserData from local storage
    let loggedUserDataCopy = JSON.parse(
      JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
    );
    let loggedUserData;

    if (loggedUserDataCopy !== null) {
      loggedUserData = JSON.parse(loggedUserDataCopy);
    }
    console.log("loggeduser", loggedUserData.currentUser.id);
  
    orderStore.postOrders({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      observations: formValues.observations,
      phone: formValues.phone,
      country: formValues.country,
      city: formValues.city,
      zipcode: formValues.zipcode,
      items: cartStore.cart.items,
      userId: loggedUserData.currentUser.id,
      price: cartStore.cart.total,
    });
    console.log("aici");
    console.log(loggedUserData.currentUser.id)
   

    await fetch(
      `http://localhost:3000/cart/editcart/${loggedUserData.currentUser.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ total: 0, items: [] }),
      }
    );
    window.location.href = "/profil";
  
  }

  return (
    <StyledFormContainer
      width="50%"
      padding="2rem 3rem"
      mobilePadding="2rem 0"
      mobileWidth="100%"
      
    >
      <StyledFormTitle>Adresă de livrare</StyledFormTitle>
      <StyledInputRow>
        <StyledInputWithLabel>
          <StyledLabel>Nume</StyledLabel>
          <StyledInput
            id="shipping-first-name"
            name="firstName"
            placeholder="Nume"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel>
          <StyledLabel>Prenume</StyledLabel>
          <StyledInput
            id="shipping-last-name"
            name="lastName"
            placeholder="Prenume"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
      </StyledInputRow>
      <StyledInputRow>
        <StyledInputWithLabel>
          <StyledLabel>Adresă</StyledLabel>
          <StyledInput
            id="shipping-address"
            name="address"
            placeholder="Adresa"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
      </StyledInputRow>
      <StyledInputRow>
        <StyledInputWithLabel>
          <StyledLabel>Adițional</StyledLabel>
          <StyledInput
            id="shipping-observations"
            name="shipping-observations"
            placeholder="Numar bloc, scara, etc."
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
      </StyledInputRow>
      <StyledInputRow>
        <StyledInputWithLabel>
          <StyledLabel>Număr de telefon</StyledLabel>
          <StyledInput
            id="shipping-phone"
            name="phone"
            type="number"
            placeholder="Număr de telefon"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
      </StyledInputRow>
      <StyledInputRow>
        <StyledInputWithLabel>
          <StyledLabel>Țară</StyledLabel>
          <StyledInput
            id="shipping-country"
            name="country"
            placeholder="Țară"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel>
          <StyledLabel>Oraș</StyledLabel>
          <StyledInput
            id="shipping-city"
            name="city"
            placeholder="Oraș"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
        <StyledInputWithLabel>
          <StyledLabel>Cod poștal</StyledLabel>
          <StyledInput
            id="shipping-zipcode"
            name="zipcode"
            placeholder="Cod poștal"
            onChange={handleInputChange}
          />
        </StyledInputWithLabel>
      </StyledInputRow>
      {/* <FormButtonsArea>
        <StyledFormButton
        >
          Spre plată
        </StyledFormButton>
      </FormButtonsArea> */}

      <StripeCheckoutForm 
      onSubmit = {submitForm}
      buttonDisabled = {buttonDisabled}
      />

    </StyledFormContainer>
  );
});

export default ShippingDetailsForm;
