import DataTable from "../../common/tableComponent/DataTable";
import data from "./data.json";
import  Header  from "../../components/TableHeader/Header";

// headers key should be identical with key from API, labels are the table headers
const headers = [
  { key: "id", label: "InvoiceNo" },
  { key: "first_name", label: "Bank" },
  { key: "last_name", label: "Name" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

const Invoices: React.FC = () => {
  return (
    <> 
      <Header isShown={false}/>
      <DataTable
        headers={headers}
        data={data}
      />
    </>
  );
};

export default Invoices;
