import styled from "styled-components";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <S.Container>
      <LeftSideBar />
      <S.DashBoardContent>
        <Navbar />
        <Outlet />
      </S.DashBoardContent>
    </S.Container>
  );
};

export default RootLayout;

const S = {
  Container: styled.div`
    display: flex;
  `,
  DashBoardContent: styled.div`
    flex: 6;
  `,
};
