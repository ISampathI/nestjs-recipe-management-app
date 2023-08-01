import React from "react";
import "./navBar.scss";
import { Typography, Row, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppState, Recipe } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { setRecipes } from "../../redux/actions/recipeActions";
import { useDispatch, useSelector } from "react-redux";

// NavBar component for rendering a navigation bar
function NavBar({ nav = false }) {
  const user = useSelector((state: AppState) => state.user); // Retrieve the recipes from the Redux store
  const dispatch = useDispatch();

  const getRecipes = async () => {
    await axios
      .get<Recipe[]>(`${API_ADDRESS}/recipes/${user.user.id}`,{
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        }
      })
      .then((res) => {
        console.log(res);
        dispatch(setRecipes(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="NavBar px-4 sm:7 md:px-12 h-[3.5rem] items-center">
      <Link to="/" style={{ marginRight: "auto" }}>
      <Row className="z-10 flex items-center logo">
          <i className="mr-1 text-[1.7rem] fa-solid fa-burger"></i>
          <p className="h-full pt-1 m-0 text-xl font-bold">
            ReciSave
          </p>
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
