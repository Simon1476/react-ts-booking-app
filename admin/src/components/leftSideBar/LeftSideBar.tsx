import styled from "styled-components";

import Dashboard from "@mui/icons-material/Dashboard";
import PersonOutline from "@mui/icons-material/PersonOutline";
import LocalShipping from "@mui/icons-material/LocalShipping";
import CreditCard from "@mui/icons-material/CreditCard";
import Store from "@mui/icons-material/Store";
import InsertChart from "@mui/icons-material/InsertChart";
import SettingsApplications from "@mui/icons-material/SettingsApplications";
import ExitToApp from "@mui/icons-material/ExitToApp";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlined from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlined from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="" style={{ textDecoration: "none" }}>
          <S.LogoTitle>Simon King</S.LogoTitle>
        </Link>
      </S.Logo>
      <S.SidebarNavContainer>
        <S.SidebarNavList>
          <S.SidebarNavSectionTitle>MAIN</S.SidebarNavSectionTitle>
          <S.SidebarNavItem>
            <S.Icon>
              <Dashboard />
            </S.Icon>
            <S.SidebarNavItemLabel>Dashboard</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavSectionTitle>LISTS</S.SidebarNavSectionTitle>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <S.SidebarNavItem>
              <S.Icon>
                <PersonOutline />
              </S.Icon>
              <S.SidebarNavItemLabel>Users</S.SidebarNavItemLabel>
            </S.SidebarNavItem>
          </Link>

          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <S.SidebarNavItem>
              <S.Icon>
                <Store />
              </S.Icon>
              <S.SidebarNavItemLabel>Hotels</S.SidebarNavItemLabel>
            </S.SidebarNavItem>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <S.SidebarNavItem>
              <S.Icon>
                <CreditCard />
              </S.Icon>
              <S.SidebarNavItemLabel>Rooms</S.SidebarNavItemLabel>
            </S.SidebarNavItem>
          </Link>
          <S.SidebarNavItem>
            <S.Icon>
              <LocalShipping />
            </S.Icon>
            <S.SidebarNavItemLabel>Delivery</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavSectionTitle>USEFUL</S.SidebarNavSectionTitle>
          <S.SidebarNavItem>
            <S.Icon>
              <InsertChart />
            </S.Icon>
            <S.SidebarNavItemLabel>Stats</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavItem>
            <S.Icon>
              <NotificationsNone />
            </S.Icon>
            <S.SidebarNavItemLabel>Notifications</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavSectionTitle>SERVICE</S.SidebarNavSectionTitle>
          <S.SidebarNavItem>
            <S.Icon>
              <SettingsSystemDaydreamOutlined />
            </S.Icon>
            <S.SidebarNavItemLabel>System Health</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavItem>
            <S.Icon>
              <PsychologyOutlined />
            </S.Icon>
            <S.SidebarNavItemLabel>Logs</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavItem>
            <S.Icon>
              <SettingsApplications />
            </S.Icon>
            <S.SidebarNavItemLabel>Settings</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavSectionTitle>USER</S.SidebarNavSectionTitle>
          <S.SidebarNavItem>
            <S.Icon>
              <AccountCircleOutlined />
            </S.Icon>
            <S.SidebarNavItemLabel>Profile</S.SidebarNavItemLabel>
          </S.SidebarNavItem>
          <S.SidebarNavItem>
            <S.Icon>
              <SettingsApplications />
            </S.Icon>
            <ExitToApp>Logout</ExitToApp>
          </S.SidebarNavItem>
        </S.SidebarNavList>
      </S.SidebarNavContainer>

      <S.ThemeToggle>
        <S.ToggleButton className="light" />
        <S.ToggleButton className="dark" />
      </S.ThemeToggle>
    </S.Container>
  );
};

export default LeftSideBar;

const S = {
  Container: styled.div`
    flex: 1;
    border-right: 0.5px solid rgb(230, 227, 227);
    min-height: 100vh;
    background-color: white;
  `,
  Logo: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  `,
  LogoTitle: styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6439ff;
  `,
  SidebarNavContainer: styled.div`
    padding-left: 10px;
  `,
  SidebarNavList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  SidebarNavSectionTitle: styled.p`
    margin-top: 15px;
    margin-bottom: 5px;
    color: #999;
    font-size: 10px;
    font-weight: bold;
  `,
  SidebarNavItem: styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ece8ff;
    }
  `,
  SidebarNavItemLabel: styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
  `,
  Icon: styled.div`
    font-size: 20px;
  `,
  ThemeToggle: styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
  `,
  ToggleButton: styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #7451f8;
    cursor: pointer;
    margin: 5px;

    &.light {
      background-color: whitesmoke;
    }

    &.dark {
      background-color: #333;
    }
  `,
};
