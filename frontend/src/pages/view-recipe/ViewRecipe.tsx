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
    <div className="ViewRecipe">
      <NavBar></NavBar>
      <div className="container">
        <div className="top-banner">
          <div>
            <Typography.Title
              style={{ fontSize: "3.5rem", margin: "0", color: "white" }}
            >
              LET'S COOK
            </Typography.Title>
          </div>
        </div>
        <Row className="form-container">
          <Col className="form">
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
            <Typography.Text className="form-data" style={{lineHeight:"1.7rem"}}>
              {recipe?.description}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewRecipe;
