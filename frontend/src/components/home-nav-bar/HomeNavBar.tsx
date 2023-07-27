import React, { ReactNode } from "react";
import "./homeNavBar.scss";
import { Typography, Row, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Recipe } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { setRecipes } from "../../redux/actions/recipeActions";
import { useDispatch } from "react-redux";

// NavBar component for rendering a navigation bar
function HomeNavBar() {
  const dispatch = useDispatch();

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
      <Link to="/login" style={{ marginRight: "1rem" }}>
        <Button style={{ border: "1px solid #5BC18F", borderRadius: "10px" }}>
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button style={{ borderRadius: "10px" }} type="primary">
          Register
        </Button>
      </Link>
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
