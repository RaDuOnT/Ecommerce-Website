import { observable, action } from "mobx";
import { UserInt } from "../models/user";



interface UserProps {
  users: UserInt[];
  getUser: () => Promise<UserInt[]>;
  postUser: (data: UserInt) => {};
  uniqueEmail: (email: string) => Promise<boolean>;
}

const usersList: UserProps = observable({
  users: [],
  getUser: action(async function () {
    const users = await fetch("http://localhost:3000/users").then((res) =>
      res.json()
    );

    const tempArr = users;
    return (usersList.users = tempArr);
  }),

  uniqueEmail: action(async function (email: string) {
    const users = await fetch("http://localhost:3000/users").then((res) =>
      res.json()
    );
    const tempArr = users.filter((user: UserInt) => user.email === email);

    return tempArr.length > 0 ? false : true;
  }),


  postUser: action(async function (data: UserInt) {
    const newUser = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await newUser.json();
    const tempArr = usersList.users.slice(0);
    usersList.users = tempArr;
    tempArr.push(response);
    return response._id;
  }),
});

export default usersList;