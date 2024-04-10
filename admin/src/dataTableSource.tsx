import { GridRenderCellParams } from "@mui/x-data-grid";
import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  CellImg: styled.img`
    width: 32px;
    height: 32px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 50%;
  `,
  CellWithStatus: styled.div`
    padding: 5px;
    border-radius: 5px;

    &.active {
      background-color: rgba(0, 128, 0, 0.05);
    }
    &.pending {
      background-color: rgba(255, 217, 0, 0.05);
      color: goldenrod;
    }
    &.passive {
      background-color: rgba(255, 0, 0, 0.05);
      color: crimson;
    }
  `,
};

export type UserRow = {
  username: string;
  img: string;
  status: string;
};

// type CellStatus = {
//   status: string;
// };

export const userColumns = [
  { field: "id", headerName: "ID", minWidth: 150 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <S.Container>
          <S.CellImg
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </S.Container>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 160,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <S.CellWithStatus className={`${params.row.status}`}>
          {params.row.status}
        </S.CellWithStatus>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Sunny",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "2sunny@gmail.com",
    age: 28,
  },
  {
    id: 3,
    username: "Rain",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "3rain@gmail.com",
    age: 42,
  },
  {
    id: 4,
    username: "Cloud",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "4cloud@gmail.com",
    age: 19,
  },
  {
    id: 5,
    username: "Star",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "5star@gmail.com",
    age: 30,
  },
  {
    id: 6,
    username: "Moon",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "6moon@gmail.com",
    age: 25,
  },
  {
    id: 7,
    username: "Fire",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "7fire@gmail.com",
    age: 50,
  },
  {
    id: 8,
    username: "Wind",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "8wind@gmail.com",
    age: 37,
  },
  {
    id: 9,
    username: "Earth",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "9earth@gmail.com",
    age: 45,
  },
  {
    id: 10,
    username: "Ocean",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    country: "Korea",
    city: "seoul",
    phone: "010-6803-9590",
    email: "10ocean@gmail.com",
    age: 50,
  },
];
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
