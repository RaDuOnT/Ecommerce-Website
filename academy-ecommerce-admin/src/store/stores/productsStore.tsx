import { observable, action } from "mobx";
import { productsEndpoint } from "../environment";
import productsService from "../services/productsRequests";
import { configure } from "mobx";

//Disable the mobx-strict-mode
configure({
  enforceActions: "never",
});

interface ProductsProps {
  products: object[];
  fetchSucces: object | string;
  getProducts: () => any;
  postProducts: (
    payload: object,
    sendNotification: (status: string, title: string, text: string) => void
  ) => {};
  deleteProduct: (id: string) => {};
  putProduct: (payload: object, id: string) => {};
}

const productsList: ProductsProps = observable({
  products: [],
  fetchSucces: {},

  getProducts: action(async function () {
    const products = await fetch(productsEndpoint).then((res) => res.json());

    const tempArr = products;
    return (productsList.products = tempArr);
  }),

  postProducts: action(async function (
    payload: object,
    sendNotification: (status: string, title: string, text: string) => void
  ) {
    try {
      const newProducts = await fetch(productsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (newProducts.ok) {
        sendNotification(
          "success",
          "Added product",
          "You have succesfully added a new product!"
        );
      } else {
        sendNotification(
          "fail",
          "Failed adding a product",
          "Adding a new product has failed! Try again later!"
        );
        return;
      }
      const response = await newProducts.json();

      const tempArr = productsList.products.slice(0);
      tempArr.push(response);

      return (productsList.products = tempArr);
    } catch (err) {
      sendNotification(
        "fail",
        "Failed adding a product",
        "Adding a new product has failed! Try again later!"
      );
    }
  }),

  deleteProduct: action(async function (id: string) {
    return productsService
      .remove(id)
      .then((json) => {
        console.log("date sterse", json);
        const tempArr = productsList.products.filter(
          (eachElem: any) => eachElem._id !== id
        );
        productsList.products = tempArr;
        productsList.fetchSucces = "Success";
      })
      .catch((err) => {
        productsList.fetchSucces = err;
      });
  }),

  putProduct: action(async function (payload: object, id: string) {
    const updateProduct = await fetch(`${productsEndpoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const tempCopy = productsList.products.slice(0);
    const foundIndex = tempCopy.findIndex((obj: any) => obj._id === id);
    tempCopy[foundIndex] = payload;

    return (productsList.products = tempCopy);
  }),
});

export default productsList;
