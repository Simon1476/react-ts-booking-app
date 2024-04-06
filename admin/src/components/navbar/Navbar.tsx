import styled from "styled-components";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FullscreenExitOutlined from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlined from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
  return (
    <S.Container>
      <S.SearchBox>
        <S.Input type="text" placeholder="Search!" />
        <S.SearchIcon />
      </S.SearchBox>
      <S.ItemBox>
        <S.Item>
          <LanguageOutlinedIcon />
          Enlglish
        </S.Item>
        <S.Item>
          <S.DarkIcon />
        </S.Item>
        <S.Item>
          <S.FullScreenIcon />
          Enlglish
        </S.Item>
        <S.Item>
          <S.NotificationIcon />
          <S.CounterBox>1</S.CounterBox>
        </S.Item>
        <S.Item>
          <S.ChatBubbleIcon />
          <S.CounterBox>2</S.CounterBox>
        </S.Item>
        <S.Item>
          <S.ListIcon />
        </S.Item>
      </S.ItemBox>
    </S.Container>
  );
};

export default Navbar;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `,

  SearchBox: styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;
  `,

  Input: styled.input`
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #ccc;
    }
  `,

  ItemBox: styled.div`
    display: flex;
    align-items: center;
  `,

  Item: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  `,

  CounterBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    color: white;
    font-size: 10px;
    font-weight: bold;
  `,
  SearchIcon: styled(SearchOutlinedIcon)`
    font-size: 20px;
  `,

  DarkIcon: styled(DarkModeOutlined)`
    font-size: 20px;
  `,
  FullScreenIcon: styled(FullscreenExitOutlined)`
    font-size: 20px;
  `,
  ListIcon: styled(ListOutlined)`
    font-size: 20px;
  `,

  NotificationIcon: styled(NotificationsNoneOutlined)`
    font-size: 20px;
  `,

  ChatBubbleIcon: styled(ChatBubbleOutlineOutlined)`
    font-size: 20px;
  `,
};
