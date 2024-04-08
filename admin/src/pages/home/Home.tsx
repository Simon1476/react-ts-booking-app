import styled from "styled-components";

import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const Home = () => {
  return (
    <S.Container>
      <S.WidgetContainer>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </S.WidgetContainer>
      <S.Chart>
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </S.Chart>
      <S.List>
        <S.ListTitle>Latest Transactions</S.ListTitle>
        <Table />
      </S.List>
    </S.Container>
  );
};

export default Home;

const S = {
  Container: styled.div``,
  WidgetContainer: styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
  `,
  Chart: styled.div`
    display: flex;
    gap: 20px;
    padding: 5px 20px;
  `,
  List: styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  `,
  ListTitle: styled.div`
    margin-bottom: 15px;
    color: gray;
    font-weight: 500;
  `,
};
