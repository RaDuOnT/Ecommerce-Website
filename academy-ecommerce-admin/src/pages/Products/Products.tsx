import DataTable from "../../common/tableComponent/DataTable";
import Header from "../../components/TableHeader/Header";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx"; // for proxy logs
import productsList from "../../store/stores/productsStore";
import Modal from "../../components/Modal/Modal";
import { prepareDataForModal } from "../../util/utility";
import Notification from "../../components/Notification/Notification";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";

// headers key should be identical with key from API, labels are the table headers
const headers = [
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "quantity", label: "Quantity" },
  { key: "manufacturer", label: "Manufacturer" },
  { key: "actions", label: "Actions" },
];

const modalTestDataAdd = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  image: [""],
  quantity: 0,
  manufacturer: "",
  category: "",
  type: "",
  topNotes: [""],
  heartNotes: [""],
  baseNotes: [""],
  perfumeGroup: [""]
};

const Products: React.FC = observer(() => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editedProduct, setEditedProduct] = useState<any>();
  const [editedId, setEditedId] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationStatus, setNotificationStatus] = useState<string>("");
  const [notificationTitle, setNotificationTitle] = useState<string>("");
  const [notificationText, setNotificationText] = useState<string>("");

  // should have been created using React.createPortal unlucky
  const sendNotification = (status: string, title: string, text: string) => {
    setNotificationStatus(status);
    setNotificationTitle(title);
    setNotificationText(text);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const openAddModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    productsList.getProducts();
  }, []);

  const addProduct = (newProduct: object) => {
    productsList.postProducts(newProduct, sendNotification);
    setOpenModal(false);
  };
  const editProduct = (editedProduct: any) => {
    console.log(editedId);
    productsList.putProduct(editedProduct, editedId);
    setEditModal(false);
  };

  const addProductAction = {
    text: "Adauga",
    onclick: addProduct,
  };
  const editProductAction = {
    text: "Editeaza",
    onclick: editProduct,
  };

  const openEditModal = (object: any) => {
    setEditedId(object._id);
    setEditedProduct(object);
    setEditModal(true);
  };

  return (
    <>
      <Modal
        title={"Add products"}
        actions={addProductAction}
        show={openModal}
        inputs={prepareDataForModal(modalTestDataAdd)}
        showFunction={setOpenModal}
        initialState={modalTestDataAdd}
      />{" "}
      <Notification
        text={notificationText}
        status={notificationStatus}
        title={notificationTitle}
        show={showNotification}
      />
      {editedProduct && (
        <Modal
          title={"Edit products"}
          actions={editProductAction}
          show={editModal}
          inputs={prepareDataForModal(editedProduct)}
          showFunction={setEditModal}
          initialState={editedProduct}
        />
      )}
      <Header isShown={true} openModal={openAddModal} />
      <DataTable
        headers={headers}
        data={productsList.products}
        actions={["delete", "update", "more"]} // remove actions if you don't need them
        deleteObj={(id: string) => productsList.deleteProduct(id)}
        updateObj={(object: object) => {
          openEditModal(object);
        }}
      />
    </>
  );
});
export default Products;
