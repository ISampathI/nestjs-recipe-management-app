import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import axios from "axios";
import { Typography, Row, Button, Form, Input, message } from "antd";
import "./editRecipe.scss";
import { NoticeType } from "antd/es/message/interface";
import { AppState, RecipeForm } from "../../utils/types/interfaces";
import { API_ADDRESS } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

// Component for create a new recipe
function EditRecipe() {
  const user = useSelector((state: AppState) => state.user); // Retrieve the recipes from the Redux store
  const recipe = useSelector((state: AppState) => state.selectedRecipe); // Retrieve the selected recipe from the Redux store

  const [messageApi, contextHolder] = message.useMessage();

  const sendMessage = (type: NoticeType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const handleSubmit = async (formData: RecipeForm) => {
    console.log(formData);

    await axios
      .put(`${API_ADDRESS}/recipes/${recipe?.id}`, formData, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        sendMessage("success", "Successfully updated!");
      })
      .catch((error) => {
        console.log(error);
        sendMessage("error", "Update failed!");
      });
  };

  return (
    <div className="relative w-screen h-screen EditRecipe ">
      <NavBar></NavBar>
      <div className="edit-container w-screen h-[calc(100vh-3.5rem)] overflow-auto pb-20 overflow-x-hidden">
        <div className="top-banner  bg-cover bg-no-repeat bg-center h-[100px] md:h-[150px] w-full relative flex flex-col justify-center text-white">
          <div className="z-10 ">
            <Typography.Title
            className="md:!text-[3.5rem] !m-0 !text-white"
            >
              EDIT THE RECIPE
            </Typography.Title>
          </div>
        </div>
        <RecipeDataForm
          btnName="UPDATE"
          data={recipe}
          onSubmit={handleSubmit}
        ></RecipeDataForm>
      </div>
      {contextHolder}
    </div>
  );
}

export default EditRecipe;
