import styled from "styled-components";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
const Widget = ({ type }: { type: string }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <S.Icon>
            <PersonOutlined
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          </S.Icon>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <S.Icon>
            <ShoppingCartOutlined
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          </S.Icon>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <S.Icon>
            <MonetizationOnOutlined
              style={{
                backgroundColor: "rgba(0, 128, 0, 0.2)",
                color: "green",
              }}
            />
          </S.Icon>
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <S.Icon>
            <AccountBalanceWalletOutlined
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          </S.Icon>
        ),
      };
      break;
    default:
      break;
  }
  return (
    <>
      {data && (
        <S.Container>
          <S.LeftContent>
            <S.Title>{data.title}</S.Title>
            <S.Counter>
              {data.isMoney && "$"} {amount}
            </S.Counter>
            <S.Link>{data.link}</S.Link>
          </S.LeftContent>
          <S.RightContent>
            <S.Percentage>
              <KeyboardArrowUp />
              {diff} %
            </S.Percentage>
            {data.icon}
          </S.RightContent>
        </S.Container>
      )}
    </>
  );
};

export default Widget;

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100px;
    padding: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  `,
  LeftContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  RightContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Title: styled.span`
    color: rgb(160, 160, 160);
    font-weight: bold;
    font-size: 14px;
  `,
  Counter: styled.span`
    font-size: 28px;
    font-weight: 300;
  `,
  Link: styled.span`
    width: max-content;
    border-bottom: 1px solid gray;
    font-size: 12px;
  `,
  Percentage: styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;

    &.positive {
      color: green;
    }
    &.negative {
      color: red;
    }
  `,
  Icon: styled.div`
    align-self: flex-end;
    padding: 5px;
    border-radius: 5px;
    font-size: 18px;
  `,
};
