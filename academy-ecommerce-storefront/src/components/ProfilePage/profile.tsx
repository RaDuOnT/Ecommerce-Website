import React, { useEffect, useContext } from "react";
import {
  MainProfileContainer,
  ProfileButton,
  ProfileContainers,
  OptionSelect,
  ProfileDetails,
  ProfileHeader,
  ProfileBody,
  SelectedPageTitle,
  //   OrderTable,
  OrderItem,
  OrderItemDetails,
  OrderStatus,
  ItemFoto,
  PageButtons,
} from "./profileStyle";
import { Orders } from "./dummy";
import { StoreContext } from "../../store.context";
import orderStore from "../../api/store/orderStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const ORDERS_PER_PAGE = 5;

export const Profile = observer(() => {
  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const [selectedOption, setSelectedOption] = React.useState("Contul meu");
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleOptionSelect = (event: any) => {
    setSelectedOption(event.target.value);
  };

  // get UserData from local storage
  let loggedUserDataCopy = JSON.parse(
    JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
  );
  let loggedUserData: any;

  if (loggedUserDataCopy !== null) {
    loggedUserData = JSON.parse(loggedUserDataCopy);
  }

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    orderStore.getOrders(loggedUserData.currentUser.id).then(setLoading(false));
  }, []);


  const handleLogout = async () => {
    setLoading(true);
    await authStore.logout();
    setLoading(false);
    window.location.href = "/login";
  };

  let selectedOptionContent;
  switch (selectedOption) {
    case "Contul meu":
      selectedOptionContent = (
        <ProfileDetails>
          <p>
            Email: <span>{loggedUserData.currentUser.email}</span>
          </p>
          <p>
            Telefon: <span>{loggedUserData.currentUser.phoneNumber}</span>
          </p>
          <ProfileButton>Edit</ProfileButton>
        </ProfileDetails>
      );
      break;
    case "Comenzile mele":
      const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
      const endIndex = startIndex + ORDERS_PER_PAGE;
      const currentOrders = Orders.slice(startIndex, endIndex);

      orderStore.orders.map((order) => {
        console.log(order);
      });

      const pageButtons = [];
      for (let i = 1; i <= Math.ceil(Orders.length / ORDERS_PER_PAGE); i++) {
        pageButtons.push(
          <PageButtons onClick={() => setCurrentPage(i)}>{i}</PageButtons>
        );
      }

      selectedOptionContent = (
        <div>
          {currentOrders.map((order) => (
            <OrderItem>
              <OrderItemDetails>
                <h2>Order {order.orderNumber}</h2>
                <p>Data comanda: {order.orderDate}</p>
              </OrderItemDetails>
              <OrderStatus
                color={
                  order.status === "Livrata"
                    ? "green"
                    : order.status === "In procesare"
                    ? "orange"
                    : order.status === "Anulata"
                    ? "red"
                    : "gray"
                }
              >
                <li>{order.status}</li>
              </OrderStatus>
              <ItemFoto src={order.item.image} alt="item" />
            </OrderItem>
          ))}
          {pageButtons}
        </div>
      );
      break;
    case "Adresele mele":
      selectedOptionContent = <div>Content for 'Adresele mele' goes here</div>;
      break;
    case "Metode de plata":
      selectedOptionContent = (
        <div>Content for 'Metode de plata' goes here</div>
      );
      break;
    default:
      selectedOptionContent = null;
  }

  return (
    <MainProfileContainer>
      <ProfileHeader>
        <ProfileButton
          backgroundColor="transparent"
          border="2px solid #8488a1"
          onClick={handleLogout}
        >
          Logout
        </ProfileButton>
      </ProfileHeader>
      <ProfileBody>
        <ProfileContainers>
          <OptionSelect value="Contul meu" onClick={handleOptionSelect}>
            Contul meu
          </OptionSelect>
          <OptionSelect value="Comenzile mele" onClick={handleOptionSelect}>
            Comenzile mele
          </OptionSelect>
          <OptionSelect value="Adresele mele" onClick={handleOptionSelect}>
            Adresele mele
          </OptionSelect>
          <OptionSelect value="Metode de plata" onClick={handleOptionSelect}>
            Metode de plata
          </OptionSelect>
        </ProfileContainers>
        <ProfileContainers>
          <SelectedPageTitle>{selectedOption}</SelectedPageTitle>
          {selectedOptionContent}
        </ProfileContainers>
      </ProfileBody>
    </MainProfileContainer>
  );
});
