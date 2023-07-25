import { Row, Button, Form, Input } from "antd";
import "./resipeDataForm.scss";

const initData = { name: "", ingredients: "", description: "" };

// RecipeDataForm component for rendering a form to input recipe data
function RecipeDataForm({ btnName = "SAVE", data = initData }) {
  return (
    <Row className="form-container">
      <Form className="form" layout="vertical">
        <Form.Item className="form-item" name="name" label="Recipe Name">
          <Input
            className="user-input"
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
          ></Input>
        </Form.Item>
        <Form.Item className="form-item" name="ingredients" label="Ingredients">
          <Input
            className="user-input"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          ></Input>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea
            rows={8}
            style={{ borderColor: "rgb(192, 192, 192)" }}
          ></Input.TextArea>
        </Form.Item>
        <Form.Item className="form-item" style={{ marginTop: "35px" }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              backgroundColor: "#5BC18F",
              height: "45px",
            }}
          >
            {btnName}
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default RecipeDataForm;
