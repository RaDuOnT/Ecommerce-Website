import { observable, action } from "mobx";
import { productsReviewsEndpoint } from "../environment";
import productsReviewsService from "../services/productsReviewsRequests";
import { configure } from "mobx";

//Disable the mobx-strict-mode
configure({
  enforceActions: "never",
});

interface ProductsProps {
  productsReviews: object[];
  fetchSucces: object | string;
  getProductsReviews: () => any;
  postProductsReviews: (payload: object) => {};
  deleteProductsReviews: (id: string) => {};
  putProductsReviews: (payload: object, id: string) => {};
}

const productsReviewsList: ProductsProps = observable({
  productsReviews: [],
  fetchSucces: {},

  getProductsReviews: action(async function () {
    const products = await fetch(productsReviewsEndpoint).then((res) => res.json());

    const tempArr = products;
    return (productsReviewsList.productsReviews = tempArr);
  }),

  postProductsReviews: action(async function (payload: object) {
    const newProducts = await fetch(productsReviewsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(payload),
    });
    const response = await newProducts.json();

    const tempArr = productsReviewsList.productsReviews.slice(0);
    tempArr.push(response);

    return (productsReviewsList.productsReviews = tempArr);
  }),

  deleteProductsReviews: action(async function (id: string) {
    return productsReviewsService
      .remove(id)
      .then((json) => {
        console.log("date sterse", json);
        const tempArr = productsReviewsList.productsReviews.filter(
          (eachElem: any) => eachElem._id !== id
        );
        productsReviewsList.productsReviews = tempArr;
        productsReviewsList.fetchSucces = "Success";
      })
      .catch((err) => {
        productsReviewsList.fetchSucces = err;
      });
  }),

  putProductsReviews: action(async function (payload: object, id: string) {
    const updateProduct = await fetch(`${productsReviewsEndpoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const tempCopy = productsReviewsList.productsReviews.slice(0);
    const foundIndex = tempCopy.findIndex((obj: any) => obj._id === id);
    tempCopy[foundIndex] = payload;

    return (productsReviewsList.productsReviews = tempCopy);
  }),
});

export default productsReviewsList;
