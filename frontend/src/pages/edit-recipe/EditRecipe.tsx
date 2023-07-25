import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import axios from "axios";
import { Typography, Row, Button, Form, Input, message } from "antd";
import "./editRecipe.scss";
import { NoticeType } from "antd/es/message/interface";

// Component for create a new recipe
function EditRecipe() {
  const [messageApi, contextHolder] = message.useMessage();

  const sendMessage = (type: NoticeType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
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
        <RecipeDataForm btnName="UPDATE"></RecipeDataForm>
      </div>
    </div>
  );
}

export default EditRecipe;
