import { observable, action } from "mobx";
import { ordersEndpoint } from "../environment";
import ordersStore from "../services/ordersRequests";
import { configure } from "mobx";

//Disable the mobx-strict-mode
configure({
  enforceActions: "never",
});

interface OrdersProps {
  orders: object[];
  fetchSucces: object | string;
  getOrders: () => any;
  postOrders: (payload: object) => {};
  deleteOrder: (id: string) => {};
  putOrder: (payload: object, id: string) => {};
}

const ordersList: OrdersProps = observable({
  orders: [],
  fetchSucces: {},

  getOrders: action(async function () {
    const products = await fetch(ordersEndpoint).then((res) => res.json());
    const tempArr = products;
    return (ordersList.orders = tempArr);
  }),

  postOrders: action(async function (payload: object) {
    const newProducts = await fetch(ordersEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(payload),
    });
    const response = await newProducts.json();

    const tempArr = ordersList.orders.slice(0);
    tempArr.push(response);

    return (ordersList.orders = tempArr);
  }),

  deleteOrder: action(async function (id: string) {
    return ordersStore
      .remove(id)
      .then((json) => {
        console.log("date sterse", json);
        const tempArr = ordersList.orders.filter(
          (eachElem: any) => eachElem._id !== id
        );
        ordersList.orders = tempArr;
        ordersList.fetchSucces = "Success";
      })
      .catch((err) => {
        ordersList.fetchSucces = err;
      });
  }),

  putOrder: action(async function (payload: object, id: string) {
    const updateProduct = await fetch(`${ordersEndpoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const tempCopy = ordersList.orders.slice(0);
    const foundIndex = tempCopy.findIndex((obj: any) => obj._id === id);
    tempCopy[foundIndex] = payload;

    return (ordersList.orders = tempCopy);
  }),
});

export default ordersList;
