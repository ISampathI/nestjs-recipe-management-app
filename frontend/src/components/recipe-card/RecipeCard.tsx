import React, { useState } from "react";
import { Card, Col, Modal } from "antd";
import recipeImg from "../../assets/img/recipe.webp";
import { AppState, Recipe } from "../../utils/types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../redux/actions/recipeActions";
import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";

interface RecipeCardProps {
  data: Recipe;
  onDelete: () => any;
}

// RecipeCard component for rendering a card with recipe information
function RecipeCard({ data, onDelete }: RecipeCardProps) {
  const recipe = useSelector((state: AppState) => state.selectedRecipe); // Retrieve the selected recipe from the Redux store
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    await onDelete();
    setConfirmLoading(false);
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Confirm Deletion"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this recipe?</p>
      </Modal>
      <Col lg={8} xl={6} sm={12} xxl={24}                                                                                                                                                                           >
        <Card
          hoverable
          onClick={() => {
            dispatch(selectRecipe(data));
          }}
          className="h-full p-4 px-0"
          cover={
            <Link to="/view" className="cursor-pointer" style={{ all: "unset"}}>
              <img
                alt="example"
                height="150px"
                src={recipeImg}
                className="object-contain "
              />
            </Link>
          }

          actions={[
            <Link to="/edit" style={{ all: "unset", cursor: "pointer" }}>
              <EditOutlined key="edit" />
            </Link>,
            <DeleteOutlined key="delete" onClick={showModal} />,
            <Link to="/view" style={{ all: "unset", cursor: "pointer" }}>
              <EllipsisOutlined key="ellipsis" />
            </Link>,
          ]}
        >
          <Link to="/view" style={{ all: "unset", cursor: "pointer" }}>
            <Card.Meta
              title={data.name}
              description={data.description.slice(0, 150) + " ..."}
              className="!-mt-5 pb-[20px]"
        
            />
          </Link>
        </Card>
      </Col>
    </>
  );
}

export default RecipeCard;
