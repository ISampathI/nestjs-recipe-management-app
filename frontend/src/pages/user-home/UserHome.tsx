import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import { API_ADDRESS } from "../../utils/helpers";
import axios from "axios";
import { setRecipes } from "../../redux/actions/recipeActions";
import { Col, Row, Typography } from "antd";
import "./userHome.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState, Recipe } from "../../utils/types/interfaces";

const { Title, Paragraph } = Typography;

function UserHome() {
  const recipes = useSelector((state: AppState) => state.recipes); // Retrieve the recipes from the Redux store
  const user = useSelector((state: AppState) => state.user); // Retrieve the recipes from the Redux store
  const recipe = useSelector((state: AppState) => state.selectedRecipe); // Retrieve the selected recipe from the Redux store
  const dispatch = useDispatch();

  const getRecipes = async () => {
    await axios
      .get<Recipe[]>(`${API_ADDRESS}/recipes/user/${user.user.id}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(setRecipes(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async () => {
    let id = recipe?.id;
    
    await axios
      .delete(`${API_ADDRESS}/recipes/${id}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((res) => {
        getRecipes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch recipes when the component mounts
    getRecipes();
  }, []);

  return (
    <div className="UserHome">
      <NavBar></NavBar>
      <div className="container">
        <div className="top-banner">
          <div>
            <Title style={{ fontSize: "3.5rem", margin: "0", color: "white" }}>
              HI WELCOME BACK
            </Title>
            <Paragraph
              style={{ fontSize: "1.3rem", margin: "0", color: "white" }}
            >
              Total Recipes {recipes.length}
            </Paragraph>
          </div>
        </div>
        <Row className="recipes-container" gutter={[40, 20]}>
          {recipes.map((recipe, index) => {
            return (
              <RecipeCard
                onDelete={handleDelete}
                key={index}
                data={recipe}
              ></RecipeCard>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default UserHome;
