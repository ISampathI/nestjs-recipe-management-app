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
    <Row className="HomeNavBar">
      <div className="dec-1"></div>
      <Link to="/">
        <Row className="logo" justify="center">
          <i className="fa-solid fa-burger"></i>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: "bold" }}>
            ReciSave
          </Typography.Title>
        </Row>
      </Link>
      <Row className="nav" style={{ marginInline: "auto" }}>
        <LinkTab active={true}>Home</LinkTab>
        <LinkTab>Recipes</LinkTab>
        <LinkTab>About Us</LinkTab>
        <LinkTab>Contacts</LinkTab>
      </Row>
      {!user ? (
        <>
          <Link to="/login" style={{ marginRight: "1rem" }}>
            <Button
              style={{ border: "1px solid #5BC18F", borderRadius: "10px" }}
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button style={{ borderRadius: "10px" }} type="primary">
              Register
            </Button>
          </Link>
        </>
      ) : (
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <Avatar style={{ backgroundColor: "#5BC18F", cursor: "pointer" }}>
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
