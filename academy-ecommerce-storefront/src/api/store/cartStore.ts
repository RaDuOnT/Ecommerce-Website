import { observable, action, toJS } from "mobx";
import { configure } from "mobx";
import { CartInt } from "../models/cart";

//Disable the mobx-strict-mode
configure({
  enforceActions: "never",
});

const productsEndpoint = "http://localhost:3000/cart";

interface ProductsProps {
  cart: any;
  // fetchSucces: object | string;
  getProducts: (userId: string) => any;
  postProducts: (payload: object) => {};
  deleteProduct: (id: string) => {};
  addProductInCart: (product: any) => {};
  subtractProductInCart: (product: any) => {};
  // putProduct: (payload: object, id: string) => {};
}

const cartStore: ProductsProps = observable({
  cart: [],
  // fetchSucces: {},

  getProducts: action(async function (userId: string) {
    const products = await fetch(
      `${productsEndpoint}/usercart/?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    const tempArr = await products.json();

    return (cartStore.cart = tempArr);
  }),

  postProducts: action(async function (payload: object) {
    const newProducts = await fetch(productsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(payload),
    });
    const response = await newProducts.json();
    return (cartStore.cart = response);
  }),

  deleteProduct: action(async function (id: string) {
    const cartCopy: any = JSON.parse(JSON.stringify(cartStore.cart));
    const existingItem = cartCopy.items.find((item: any) => item._id === id);

    const removedAmount = existingItem.price * existingItem.amount;
    const newCartitems = cartCopy.items.filter((item: any) => item._id !== id);

    cartCopy.items = newCartitems;
    cartCopy.total -= removedAmount;

    const updateCart = await fetch(
      `${productsEndpoint}/editcart/${cartCopy.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ total: cartCopy.total, items: cartCopy.items }),
      }
    );

    return (cartStore.cart = cartCopy);
  }),

  addProductInCart: action(async function (product: any) {
    const cartCopy: any = JSON.parse(JSON.stringify(cartStore.cart));
    console.log("cartCopy", toJS(cartStore.cart));
    if (cartCopy.items.length === 0) {
      cartCopy.items.push({
        _id: product._id,
        image: product.image,
        name: product.name,
        manufacturer: product.manufacturer,
        price: product.price,
        totalPrice: product.price,
        amount: 1,
      });
      cartCopy.total = product.price;
    } else {
      const existingItem = cartCopy.items.find(
        (item: any) => item._id === product._id
      );

      if (existingItem) {
        existingItem.amount++;
        existingItem.totalPrice += existingItem.price;
        cartCopy.total += existingItem.price;
      } else {
        cartCopy.items.push({
          _id: product._id,
          image: product.image,
          name: product.name,
          manufacturer: product.manufacturer,
          price: product.price,
          totalPrice:  product.price,
          amount: 1,
        });
        cartCopy.total = cartCopy.total + product.price;
      }
    }
    const updateCart = await fetch(
      `${productsEndpoint}/editcart/${cartCopy.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ total: cartCopy.total, items: cartCopy.items }),
      }
    );
    return (cartStore.cart = cartCopy);
  }),
  subtractProductInCart: action(async function (product: any) {
    const cartCopy: any = JSON.parse(JSON.stringify(cartStore.cart));

    const existingItem = cartCopy.items.find(
      (item: any) => item._id === product._id
    );

    if (!existingItem) {
      return (cartStore.cart = cartCopy);
    }

    if (existingItem.amount === 1) {
      cartCopy.items = cartCopy.items.filter(
        (item: any) => item._id !== product._id
      );
      cartCopy.total -= existingItem.price;
    } else {
      existingItem.amount--;
      existingItem.totalPrice -= existingItem.price;
      cartCopy.total -= existingItem.price;
    }

    const updateCart = await fetch(
      `${productsEndpoint}/editcart/${cartCopy.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ total: cartCopy.total, items: cartCopy.items }),
      }
    );
    return (cartStore.cart = cartCopy);
  }),
});

export default cartStore;
