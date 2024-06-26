import React from "react";
import Modal from "./Modal";
const dummyFunction = () => {
  console.log("ceva");
};

export const actions = [
  { text: "Adauga", onclick: dummyFunction },
  { text: "Sterge", onclick: dummyFunction },
];

export const inputs = [
  {
    label: "Nume",
    name: "name",
    type: "text",
    value: "valoare1",
  },
  {
    label: "Prenume",
    name: "name2",
    type: "number",
    value: "2",
  },
  {
    label: "Adresa sau ceva",
    name: "name3",
    type: "address",
    value: "2023-09-09",
  },
  {
    label: "Label5",
    name: "name4",
    type: "name4",
    value: "valoare4",
  },
];

// const dummyMODAL = (
//   <Modal
//     title={"Placeholder titluuu"}
//     actions={actions}
//     show={true}
//     inputs={inputs}
//   />
// );
