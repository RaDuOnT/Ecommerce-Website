import { observable, action } from "mobx";
import { usersEndpoint } from "../environment";
import usersService from "../services/usersRequests";
import { configure } from "mobx";

//Disable the mobx-strict-mode
configure({
  enforceActions: "never",
});

interface ProductsProps {
  users: object[];
  fetchSucces: object | string;
  getUsers: () => any;
  postUsers: (payload: object) => {};
  deleteUser: (id: string) => {};
  putUser: (payload: object, id: string) => {};
}

const usersList: ProductsProps = observable({
  users: [],
  fetchSucces: {},

  getUsers: action(async function () {
    const products = await fetch(usersEndpoint,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json());

    const tempArr = products;
    return (usersList.users = tempArr);
  }),

  postUsers: action(async function (payload: object) {
    const newProducts = await fetch(usersEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(payload),
    });
    const response = await newProducts.json();

    const tempArr = usersList.users.slice(0);
    tempArr.push(response);

    return (usersList.users = tempArr);
  }),

  deleteUser: action(async function (id: string) {
    return usersService
      .remove(id)
      .then((json) => {
        const tempArr = usersList.users.filter(
          (eachElem: any) => eachElem._id !== id
        );
        usersList.users = tempArr;
        usersList.fetchSucces = "Success";
      })
      .catch((err) => {
        usersList.fetchSucces = err;
      });
  }),

  putUser: action(async function (payload: object, id: string) {
    const updateProduct = await fetch(`${usersEndpoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const tempCopy = usersList.users.slice(0);
    const foundIndex = tempCopy.findIndex((obj: any) => obj._id === id);
    tempCopy[foundIndex] = payload;

    return (usersList.users = tempCopy);
  }),
});

export default usersList;
