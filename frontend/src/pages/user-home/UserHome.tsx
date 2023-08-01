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
    <div className="relative w-screen h-screen UserHome">
      <NavBar></NavBar>
      <div className="home-container w-screen h-[calc(100vh-3.5rem)] overflow-auto overflow-x-hidden">
        <div className="top-banner bg-cover bg-no-repeat bg-center h-[120px] md:h-[200px] w-full relative flex flex-col justify-center text-white">
          <div className="z-10">
            <Title
            className="md:!text-[3.5rem] !m-0 !text-white"
             >
              HI WELCOME BACK
            </Title>
            <Paragraph
              style={{ fontSize: "1.3rem", margin: "0", color: "white" }}
            >
              Total Recipes {recipes.length}
            </Paragraph>
          </div>
        </div>
        <Row className="p-5 px:3 sm:px-10 md:px-12 lg:px-32 recipes-container" gutter={[40, 20]}>
          {recipes?.map((recipe, index) => {
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
