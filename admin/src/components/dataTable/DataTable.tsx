import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
// import axios from "axios";
import { useEffect, useState } from "react";
import { userRows } from "../../dataTableSource";

export type UserRow = {
  id: number;
  username: string;
  img: string;
  status: string;
  email: string;
  age: number;
};

const DataTable = ({ columns }) => {
  const [data, setdata] = useState(userRows);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  console.log(location);
  const [list, setList] = useState();
  // const { data, loading, error } = useFetch(`/${path}`);

  // useEffect(() => {
  //   setList(data);
  // }, [data]);

  const handleDelete = async (id: number) => {
    // try {
    //   await axios.delete(`/${path}/${id}`)
    // } catch (error) {
    // }
  };
  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams<UserRow>) => {
        return (
          <S.CellAction>
            <S.Link to="users/test">
              <S.ViewButton>View Button</S.ViewButton>
            </S.Link>
            <S.DeleteButton onClick={() => handleDelete(params.row.id)}>
              Delete
            </S.DeleteButton>
          </S.CellAction>
        );
      },
    },
  ];
  return (
    <S.Container>
      <S.DataTableTitle>
        {path}
        <Link to={`/${path}/new`}>Add New</Link>
      </S.DataTableTitle>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row: UserRow) => row.id}
      />
    </S.Container>
  );
};

export default DataTable;

const S = {
  Container: styled.div`
    width: 100%;
    height: 700px;
    padding: 20px;
  `,
  DataTableTitle: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: gray;
    font-size: 24px;
  `,
  Link: styled(Link)`
    padding: 5px;
    color: green;
    border: 1px solid green;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  `,
  CellAction: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
  `,
  ViewButton: styled.button`
    padding: 2px 5px;
    color: darkblue;
    border-radius: 5px;
    border: 1px dotted rgba(0, 0, 139, 0.596);
    cursor: pointer;
  `,
  DeleteButton: styled.button`
    padding: 2px 5px;
    color: crimson;
    border-radius: 5px;
    border: 1px dotted rgba(220, 20, 60, 0.6);
    cursor: pointer;
  `,
};
