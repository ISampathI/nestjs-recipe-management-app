import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../utils/types/interfaces";
import { Typography, Row, Button, Form, Input, message, Col } from "antd";
import "./viewRecipe.scss";

// Component for displaying a single recipe
function ViewRecipe() {
  // Retrieve the selectedRecipe from the Redux store
  const recipe = useSelector((state: AppState) => state.selectedRecipe); // Retrieve the selected recipe from the Redux store

  return (
    <div className="relative w-screen h-screen ViewRecipe">
      <NavBar></NavBar>
      <div className="view-container  w-screen h-[calc(100vh-3.5rem)] overflow-auto pb-20 overflow-x-hidden">
        <div className="top-banner  bg-cover bg-no-repeat bg-center h-[100px] md:h-[150px] w-full relative flex flex-col justify-center text-white">
          <div className="z-10 ">
            <Typography.Title
              className="md:!text-[3.5rem] !m-0 !text-white"
            >
              LET'S COOK
            </Typography.Title>
          </div>
        </div>
        <div className="flex justify-center w-full !px-3 form-container sm:!px-14 md:!px-28">
          <div className="flex flex-col !w-full !h-full !p-10 md:!w-10/12 lg:!w-3/5 form">
            <Typography.Text className="form-text">Recipe Name</Typography.Text>
            <Typography.Text className="form-data">
              {recipe?.name}
            </Typography.Text>
            <Typography.Text className="form-text">Ingredients</Typography.Text>
            {/* Render a list item for each ingredient */}
            {recipe?.ingredients?.split(",").map((item) => (
              <Typography.Text className="form-data">- {item}</Typography.Text>
            ))}
            <Typography.Text className="form-text">Description</Typography.Text>
            <Typography.Text
              className="leading-7 form-data"
            >
              {recipe?.description}
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
