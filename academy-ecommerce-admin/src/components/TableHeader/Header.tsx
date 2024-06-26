import React from "react";
import { useLocation } from "react-router";
import { TableHeader, TableHeaderTitle, Button } from "./HeaderStyle";

interface HeaderInterface {
  isShown?: boolean;
  Title?: string;
  openModal?: ()=> void;
}

const Header: React.FC<HeaderInterface> = ({
  Title,
  isShown,
  openModal
}: HeaderInterface) => {
  const location = useLocation();

  if (location.pathname === "/products") {
    Title = "Products";
  } else if (location.pathname === "/invoices") {
    Title = "Invoices";
  } else if (location.pathname === "/orders") {
    Title = "Orders";
  } else if (location.pathname === "/feedback") {
    Title = "Customers Feedback";
  } else if (location.pathname === "/users") {
    Title = "Users";
  } else if (location.pathname === "/reviews") {
    Title = "Products reviews";
  }

  return (
    <TableHeader>
      <TableHeaderTitle>{Title}</TableHeaderTitle>

      {isShown && <Button onClick={openModal}>Add New</Button>}
    </TableHeader>
  );
};

export default Header;
