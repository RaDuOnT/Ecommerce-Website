import DataTable from "../../common/tableComponent/DataTable";
import Header from "../../components/TableHeader/Header";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx"; // for proxy logs
import productsReviewsList from "../../store/stores/productsReviewsStore";
import Modal from "../../components/Modal/Modal";
import { prepareDataForModal } from "../../util/utility";

// headers key should be identical with key from API, labels are the table headers
const headers = [
  { key: "userId", label: "User key" },
  { key: "productId", label: "Product key" },
  { key: "rating", label: "Product raiting" },
  { key: "message", label: "Message" },
  { key: "actions", label: "Actions" },
];

const modalTestDataAdd = {
    email: "",
    phoneNumber: "",
  };
  
const ProductsReviews: React.FC = observer(() => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editedProduct, setEditedProduct] = useState<any>();
  const [editedId, setEditedId] = useState<string>("");
  const openAddModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    productsReviewsList.getProductsReviews();
  }, []);

  const addProduct = (newProduct: object) => {
    productsReviewsList.postProductsReviews(newProduct);
    setOpenModal(false);
  };
  const editProduct = (editedProduct: any) => {
    console.log(editedId);
    productsReviewsList.putProductsReviews(editedProduct, editedId);
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
    const objectCopy = { ...object };
    setEditedProduct(objectCopy);
    setEditModal(true);
  };

  return (
    <>
      <Modal
        title={"Adaugare produse"}
        actions={addProductAction}
        show={openModal}
        inputs={prepareDataForModal(modalTestDataAdd)}
        showFunction={setOpenModal}
        initialState={modalTestDataAdd}
      />
      {editedProduct && (
        <Modal
          title={"Edit products reviews"}
          actions={editProductAction}
          show={editModal}
          inputs={prepareDataForModal(editedProduct)}
          showFunction={setEditModal}
          initialState={editedProduct}
        />
      )}
      <Header isShown={false} openModal={openAddModal} />
      <DataTable
        headers={headers}
        data={productsReviewsList.productsReviews}
        actions={["delete", "update"]} // remove actions if you don't need them
        deleteObj={(id: string) => productsReviewsList.deleteProductsReviews(id)}
        updateObj={(object: object) => {
          openEditModal(object);
        }}
      />
    </>
  );
});
export default ProductsReviews;
