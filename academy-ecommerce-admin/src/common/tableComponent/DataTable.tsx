import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import "./dataTable.css";
import Pagination from "./Pagination/Pagination";
import styled from "styled-components";
import { toJS } from "mobx";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMore } from "react-icons/ai";

interface DataTableProps {
  data: any[]; // After we have API
  headers: { key: string; label: string }[];
  actions?: ("delete" | "update" | "more")[];
  deleteObj?: (id: string) => {};
  updateObj?: (object: object) => void;
}

interface filterDataProps {
  data: any[]; // After we have API
  actions?: ("delete" | "update" | "more")[];
  deleteObj?: (id: string) => {};
  updateObj?: (object: object) => void;
}

//based on headers you pass in this component we display columns
const addActions = ({
  data,
  actions,
  deleteObj,
  updateObj,
}: filterDataProps) => {
  let tempArr = JSON.parse(JSON.stringify(data));
  if (actions !== undefined) {
    tempArr = tempArr.map((eachElem: any) => {
      return {
        ...eachElem,
        actions: actions.map((eachActions, index) => {
          return (
            <div key={index} className="actions">
              {eachActions === "delete" && (
                <AiOutlineDelete
                  onClick={() => deleteObj && deleteObj(eachElem._id)}
                />
              )}
              {eachActions === "update" && (
                <AiOutlineEdit
                  onClick={() => updateObj && updateObj(eachElem)}
                />
              )}
              {eachActions === "more" && (
                <AiOutlineMore onClick={() => console.log("Coming soon")} />
              )}
            </div>
          );
        }),
      };
    });
  }
  return tempArr;
};

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  actions,
  deleteObj,
  updateObj,
}) => {
  const [sortKey, setSortKey] = useState<SortKeys>(headers[0].key);
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
  const [invoicesData, setInvoicesData] = useState<Data>([{}]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [firstRenderSort, setFirstRenderSort] = useState<boolean>(false);
  const lastPage = Math.ceil(data.length / 15);

  //save headers keys into an array
  const headersKeys = headers.map((item) => item.key);

  type Data = typeof data;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  useEffect(() => {
    setInvoicesData(addActions({ data, actions, deleteObj, updateObj }));
  }, [data]);

  const sortData = ({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) => {
    if (!sortKey) return tableData;

    const sortedData = invoicesData.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) return sortedData.reverse();

    return sortedData;
  };

  const SortButton = ({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: any;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) => {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        {columnKey === "actions" ? "" : "▲"}
      </button>
    );
  };

  const sortedData = useCallback(() => {
    //first render we return unsorted data
    if (!firstRenderSort) return invoicesData;
    return sortData({
      tableData: invoicesData,
      sortKey,
      reverse: sortOrder === "desc",
    });
  }, [invoicesData, sortKey, sortOrder]);

  //after first render we make first render true
  useEffect(() => setFirstRenderSort(true), []);

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  };

  return (
    <>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              {headers.map((row, index) => {
                return (
                  <td key={index}>
                    {row.label}{" "}
                    <SortButton
                      columnKey={row.key}
                      onClick={() => changeSort(row.key)}
                      {...{
                        sortOrder,
                        sortKey,
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {sortedData()
              .slice(15 * (currentPage - 1), 15 * currentPage)
              .map((eachElem, index) => {
                return (
                  <tr key={index}>
                    {Object.keys(eachElem).map((key, index) => {
                      if (!headersKeys.includes(key)) return;
                      return <td key={index}>{eachElem[key]}</td>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </TableWrapper>

      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={7}
          setCurrentPage={setCurrentPage}
        />
      </PaginationWrapper>
    </>
  );
};

const PaginationWrapper = styled.div`
  margin-top: 1rem;
`;

const TableWrapper = styled.div`
  height: 80vh;
  overflow: auto;
  @media screen and (min-width: 426px) and (max-width: 767px) {
    height: calc(91vh - 408px);
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    overflow-x: scroll;
  } ;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    table-layout: unset;
  }
`;

export default DataTable;
