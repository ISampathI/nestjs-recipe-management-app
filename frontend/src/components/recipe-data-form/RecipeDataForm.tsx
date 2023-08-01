import { Row, Button, Form, Input } from "antd";
import "./resipeDataForm.scss";
import { Recipe, RecipeForm } from "../../utils/types/interfaces";
import { useEffect } from "react";

interface RecipeDataFormProps {
  btnName?: string;
  data?: Recipe | null;
  onSubmit: (data: RecipeForm) => void;
}

const initData = { id: "", name: "", ingredients: "", description: "" };

// RecipeDataForm component for rendering a form to input recipe data
function RecipeDataForm({
  btnName = "SAVE",
  data = initData,
  onSubmit = () => {},
}: RecipeDataFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);

  const handleSubmit = (values: RecipeForm) => {
    onSubmit(values);
  };

  return (
    <Row className="justify-center px-3 form-container sm:px-14 md:px-28">
      <Form
        form={form}
        onFinish={handleSubmit}
        className="w-full h-full p-10 bg-white md:w-10/12 lg:w-3/5 form "
        layout="vertical"
      >
        <Form.Item className="form-item" name="name" label="Recipe Name" rules={[{ required: true }]}>
          <Input
            className="user-input"
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
          ></Input>
        </Form.Item>
        <Form.Item
          className="form-item"
          name="ingredients"
          label="Ingredients"
          rules={[{ required: true }]}
        >
          <Input
            className="user-input"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          ></Input>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={8}
            style={{ borderColor: "rgb(192, 192, 192)" }}
          ></Input.TextArea>
        </Form.Item>
        <Form.Item
          className="form-item"
          style={{ marginTop: "35px" }}
        >
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
