import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import axios from "axios";
import { Typography, Row, Button, Form, Input, message } from "antd";
import "./newRecipe.scss";
import { NoticeType } from "antd/es/message/interface";
import { AppState, RecipeForm } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { useSelector } from "react-redux";

// Component for create a new recipe
function NewRecipe() {
  const user = useSelector((state: AppState) => state.user); // Retrieve the recipes from the Redux store
  const [messageApi, contextHolder] = message.useMessage();

  const sendMessage = (type: NoticeType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  // Function for send a POST request to add a new recipe
  const handleSubmit = async (formData: RecipeForm) => {
    await axios
      .post(`${API_ADDRESS}/recipes/`, formData, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        sendMessage("success", "successfully added!");
      })
      .catch((error) => {
        console.log(error);
        sendMessage("error", "Insertion failed!");
      });
  };

  return (
    <div className="relative w-screen h-screen NewRecipe">
      <NavBar></NavBar>
      <div className="new-container w-screen h-[calc(100vh-3.5rem)] overflow-auto pb-20 overflow-x-hidden">
        <div className="top-banner bg-cover bg-no-repeat bg-center h-[100px] md:h-[150px] w-full relative flex flex-col justify-center text-white">
          <div className="z-10 ">
            <Typography.Title
              className="md:!text-[3.5rem] !m-0 !text-white"
            >
              ADD A NEW RECIPE
            </Typography.Title>
          </div>
        </div>
        <RecipeDataForm onSubmit={handleSubmit}></RecipeDataForm>
      </div>
      {contextHolder}
    </div>
  );
}

export default NewRecipe;
