import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import axios from "axios";
import { Typography, Row, Button, Form, Input, message } from "antd";
import "./newRecipe.scss";
import { NoticeType } from "antd/es/message/interface";

// Component for create a new recipe
function NewRecipe() {
  const [messageApi, contextHolder] = message.useMessage();

  const sendMessage = (type: NoticeType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
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
        <RecipeDataForm></RecipeDataForm>
      </div>
    </div>
  );
}

export default NewRecipe;
