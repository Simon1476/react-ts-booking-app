import styled from "styled-components";

import MoreVert from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <S.Container>
      <S.RevenueHeader>
        <S.RevenueHeaderTitle>Total Revenue</S.RevenueHeaderTitle>
        <MoreVert fontSize="small" />
      </S.RevenueHeader>
      <S.Content>
        <S.Chart>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </S.Chart>
        <S.ContentTitle>Total sales made today</S.ContentTitle>
        <S.ContentAmount>$777</S.ContentAmount>
        <S.ContentDesc>
          Previous transactions processing. Last payments may not be included.
        </S.ContentDesc>

        <S.Summary>
          <S.Item>
            <S.ItemTitle>Target</S.ItemTitle>
            <S.ItemResult className="negative">
              <KeyboardArrowDown fontSize="small" />
              <S.ItemResultAmount>$15.4k</S.ItemResultAmount>
            </S.ItemResult>
          </S.Item>
          <S.Item>
            <S.ItemTitle>Last Week</S.ItemTitle>
            <S.ItemResult className="positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <S.ItemResultAmount>$15.4k</S.ItemResultAmount>
            </S.ItemResult>
          </S.Item>
          <S.Item>
            <S.ItemTitle>Last Month</S.ItemTitle>
            <S.ItemResult className="positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <S.ItemResultAmount>$18.4k</S.ItemResultAmount>
            </S.ItemResult>
          </S.Item>
        </S.Summary>
      </S.Content>
    </S.Container>
  );
};

export default Featured;

const S = {
  Container: styled.div`
    flex: 2;
    padding: 10px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  `,
  RevenueHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
  `,
  RevenueHeaderTitle: styled.h1`
    font-size: 16px;
    font-weight: 500;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;
  `,
  Chart: styled.div`
    width: 100px;
    height: 100px;
  `,
  ContentTitle: styled.p`
    color: gray;
    font-weight: 500;
  `,
  ContentAmount: styled.p`
    font-size: 30px;
  `,
  ContentDesc: styled.p`
    text-align: center;
    color: gray;
    font-weight: 300;
    font-size: 12px;
  `,
  Summary: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  Item: styled.div`
    text-align: center;
  `,
  ItemTitle: styled.p`
    color: gray;
    font-size: 14px;
  `,
  ItemResult: styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;

    &.positive {
      color: green;
    }

    &.negative {
      color: red;
    }
  `,
  ItemResultAmount: styled.p`
    font-size: 12px;
  `,
};
