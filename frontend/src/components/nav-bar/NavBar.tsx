import React from "react";
import "./navBar.scss";
import { Typography, Row, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { Recipe } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { setRecipes } from "../../redux/actions/recipeActions";
import { useDispatch } from "react-redux";

// NavBar component for rendering a navigation bar
function NavBar({ nav = false }) {
  const dispatch = useDispatch();

  const getRecipes = async () => {
    await axios
      .get<Recipe[]>(`${API_ADDRESS}/recipes`)
      .then((res) => {
        console.log(res);
        dispatch(setRecipes(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="NavBar">
      <Link to="/" style={{ marginRight: "auto" }}>
        <Row className="logo" justify="center">
          <i className="fa-solid fa-burger"></i>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: "bold" }}>
            ReciSave
          </Typography.Title>
        </Row>
      </Link>
      <Button
        type="text"
        onClick={getRecipes}
        icon={<SyncOutlined />}
        style={{ marginRight: "10px" }}
      />
      <Link to="/add">
        <Button type="primary">ADD A RECIPE</Button>
      </Link>
    </Row>
  );
}

export default NavBar;
