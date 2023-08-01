import React, { ReactNode } from "react";
import "./homeNavBar.scss";
import { Typography, Row, Button, Avatar, Dropdown } from "antd";
import { LogoutOutlined, SyncOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppState, Recipe } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { setRecipes } from "../../redux/actions/recipeActions";
import { useDispatch, useSelector } from "react-redux";
import type { MenuProps } from "antd";
import Cookies from "js-cookie";
import { access } from "fs";
import { setUser } from "../../redux/actions/userActions ";

// NavBar component for rendering a navigation bar
function HomeNavBar() {
  const user = useSelector((state: AppState) => state.user); // Retrieve the selected recipe from the Redux store
  const dispatch = useDispatch();

  const userMenuItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="user">Profile</Link>,
      icon: <UserOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "1",
      label: "Log Out",
      icon: <LogoutOutlined />,
      onClick: () => {
        dispatch(setUser(null));
        Cookies.remove("access_token");
      },
    },
  ];

  return (
    <Row className="HomeNavBar px-4 sm:7 md:px-12 h-[3.5rem]  items-center relative">
      <div className=" dec-1 w-[200px] h-[200px] absolute left-0 top-[-35px] bg-cover z-[-1] opacity-30"></div>
      <Link to="/">
        <Row className="z-10 flex items-center logo">
          <i className="mr-1 text-[1.7rem] fa-solid fa-burger"></i>
          <p className="h-full pt-1 m-0 text-xl font-bold">
            ReciSave
          </p>
        </Row>
      </Link>
      <Row className="hidden mx-auto nav sm:block">
        <LinkTab active={true}>Home</LinkTab>
        <LinkTab>Recipes</LinkTab>
        <LinkTab>About Us</LinkTab>
        <LinkTab>Contacts</LinkTab>
      </Row>
      {!user ? (
        <>
          <Link to="/login" className="ml-auto mr-4 sm:ml-0">
            <Button
            className="rounded-lg border-[#5BC18F]"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button  className="rounded-lg" type="primary">
              Register
            </Button>
          </Link>
        </>
      ) : (
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
          className="ml-auto sm:ml-0"
        >
          <Avatar className="bg-[#5BC18F] cursor-pointer">
            {user.user.username.slice(0, 2)}
          </Avatar>
        </Dropdown>
      )}
    </Row>
  );
}

export default HomeNavBar;

interface LinkTabProps {
  children: ReactNode;
  active?: boolean;
}

function LinkTab({ children, active }: LinkTabProps) {
  const navigate = useNavigate();
  return (
    <Typography.Text
      style={{ marginRight: "10px" }}
      className={active ? "nav-item nav-active" : "nav-item"}
    >
      {children}
    </Typography.Text>
  );
}
