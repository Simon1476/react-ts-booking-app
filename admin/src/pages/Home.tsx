import styled from "styled-components";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import Navbar from "../components/navbar/Navbar";
import Widget from "../components/widget/Widget";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <S.Container>
      <LeftSideBar />
      <S.DashBoardContent>
        <Navbar />
        <S.WidgetContainer>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </S.WidgetContainer>
        <S.Chart>
          <Featured />
        </S.Chart>
      </S.DashBoardContent>
    </S.Container>
  );
};

export default Home;

const S = {
  Container: styled.div`
    display: flex;
  `,
  DashBoardContent: styled.div`
    flex: 6;
  `,
  WidgetContainer: styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
  `,
  Chart: styled.div`
    padding: 5px 20px;
  `,
};
