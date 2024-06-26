import DataTable from "../../common/tableComponent/DataTable";
import data from "./data.json"
import  Header  from "../../components/TableHeader/Header";

// headers key should be identical with key from API, labels are the table headers
const headers = [
    { key: "id", label: "OrderNo" },
    { key: "first_name", label: "Quantity" },
    { key: "last_name", label: "Name" },
    { key: "amount", label: "Amount" },
    { key: "gender", label: "Status" },
    { key: "actions", label: "Actions"}, // key : 'actions'  to display the column
];

const CustomersFeedback: React.FC = () => {
    return (
        <>
            <Header isShown={false}/>
            <DataTable
                headers={headers}
                data={data}
                actions= {['delete' , 'more']}  // [delete more update] as param
            />
        </>
    )
}

export default CustomersFeedback;