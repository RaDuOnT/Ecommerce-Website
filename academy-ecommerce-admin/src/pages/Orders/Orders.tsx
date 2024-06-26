import DataTable from "../../common/tableComponent/DataTable";
import Header from "../../components/TableHeader/Header";
import ordersList from "../../store/stores/ordersStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { prepareDataForModal } from "../../util/utility";

// headers key should be identical with key from API, labels are the table headers
const headers = [
    { key: "userId", label: "User Name" },
    { key: "price", label: "Cost" },
    { key: "address", label: "Adress" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "actions", label: "Actions" },
];

const modalTestDataAdd = {
    userId: "",
    itemId: "",
    date: "",
    quantity: 0,
    price: 0,
    status: "",
    address: "",
    firstName: "",
    lastName: "",
    phone: "",
    zipcode: "",
    city: "",
    country: ""
};

const Orders: React.FC = observer(() => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [editedProduct, setEditedProduct] = useState<any>();
    const [editedId, setEditedId] = useState<string>("");
    const openAddModal = () => {
        setOpenModal(!openModal);
    };

    useEffect(() => {
        ordersList.getOrders();
    }, []);

    const addProduct = (newProduct: object) => {
        ordersList.postOrders(newProduct);
        setOpenModal(false);
    };
    const editProduct = (editedProduct: any) => {
        console.log(editedId);
        ordersList.putOrder(editedProduct, editedId);
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
                title={"Add orders"}
                actions={addProductAction}
                show={openModal}
                inputs={prepareDataForModal(modalTestDataAdd)}
                showFunction={setOpenModal}
                initialState={modalTestDataAdd}
            />
            {editedProduct && (
                <Modal
                    title={"Edit orders"}
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
                data={ordersList.orders}
                actions={['delete', 'update', 'more']}
                deleteObj={(id: string) => ordersList.deleteOrder(id)}
                updateObj={(object: object) => {
                    openEditModal(object);
                }}
            />
        </>
    )
})

export default Orders;