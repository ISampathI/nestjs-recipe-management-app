import React from "react";
import { Card, Col } from "antd";
import recipeImg from "../../assets/img/recipe.webp";

// RecipeCard component for rendering a card with recipe information
function RecipeCard() {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: "250px", padding: "10px", paddingInline: "5px" }}
        cover={
          <img
            alt="example"
            height="150px"
            src={recipeImg}
            style={{ objectFit: "contain" }}
          />
        }
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
}

export default RecipeCard;
