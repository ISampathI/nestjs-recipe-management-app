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
    <div className="NewRecipe">
      <NavBar></NavBar>
      <div className="container">
        <div className="top-banner">
          <div>
            <Typography.Title
              style={{ fontSize: "3.5rem", margin: "0", color: "white" }}
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
