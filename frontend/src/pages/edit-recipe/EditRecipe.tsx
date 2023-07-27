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
      .put(`${API_ADDRESS}/recipes/${recipe?.id}`, formData)
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
    <div className="EditRecipe">
      <NavBar></NavBar>
      <div className="container">
        <div className="top-banner">
          <div>
            <Typography.Title
              style={{ fontSize: "3.5rem", margin: "0", color: "white" }}
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
