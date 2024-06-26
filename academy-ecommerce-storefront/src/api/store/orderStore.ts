import { observable, action, toJS } from "mobx";

const ordersEndpoint = "http://localhost:3000/orders";


interface OrdersProps {
    orders: object[];
    getOrders: (userId: string) => any;
    postOrders: (payload: object) => {};
}

const orderStore: OrdersProps = observable({
    orders: [],

    getOrders: action(async function (userId: string) {
        const products = await fetch(
          `${ordersEndpoint}?userId=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        const tempArr = await products.json();
        return (orderStore.orders = tempArr);
      }),


      postOrders: action(async function (payload: object) {
        const newProducts = await fetch(ordersEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify(payload),
        });
        const response = await newProducts.json();
        return (orderStore.orders = response);
      }),
    
});

export default orderStore;
