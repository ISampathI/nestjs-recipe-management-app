import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import ConfirmDialog from "../../components/confirm-dialog/ConfirmDialog";
// import { useDispatch, useSelector } from "react-redux";
import { API_ADDRESS } from "../../utils/helpers";
import axios from "axios";
import { setRecipes } from "../../redux/actions/recipeActions";
import { Col, Row, Typography } from "antd";
import "./home.scss";

const { Title, Paragraph } = Typography;

function Home() {
  // const recipes = useSelector((state) => state.recipes); // Retrieve the recipes from the Redux store
  // const recipe = useSelector((state) => state.selectedRecipe); // Retrieve the selected recipe from the Redux store
  // const dispatch = useDispatch();

  const [openDelModal, setOpenDelModal] = useState(false); // Flag to control the visibility of the deletion modal

  // Function for send a GET request to get all recipes
  // const getRecipes = async () => {
  //   await axios
  //     .get(`${API_ADDRESS}/recipes`)
  //     .then((res) => {
  //       dispatch(setRecipes(res.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   // Fetch recipes when the component mounts
  //   getRecipes();
  // }, []);

  // // Function for send a DELETE request to delete selected recipe
  // const handleDelete = async () => {
  //   let id = recipe._id;
  //   await axios
  //     .delete(`${API_ADDRESS}/recipes/${id}`)
  //     .then((res) => {
  //       getRecipes();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="Home">
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
              Total Recipes 8
            </Paragraph>
          </div>
        </div>
        <Row className="recipes-container" gutter={[16, 16]}>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
        </Row>
      </div>
    </div>
  );
}

export default Home;
