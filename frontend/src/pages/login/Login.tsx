import React from "react";
import "./login.scss";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { UserLogin } from "../../utils/types/userType";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";

function Login() {
  const [form] = Form.useForm();

  const handleSubmit = async (formData: UserLogin) => {
    console.log(formData);
    await axios
      .post(`${API_ADDRESS}/auth/login`, formData)
      .then((res) => {
        //navigate("/login");
      })
      .catch((error) => {});
  };

  return (
    <div className="Login">
      <Row className="container">
        <div className="side-img"></div>
        <Row className="login-form">
          <Typography.Title
            style={{ marginBottom: "25px", width: "100%", textAlign: "center" }}
            level={2}
          >
            LOGIN
          </Typography.Title>
          <Form
            form={form}
            onFinish={handleSubmit}
            className="form"
            layout="vertical"
          >
            <Form.Item
              className="form-item"
              name="username"
              label="User Name"
              rules={[{ required: true }]}
            >
              <Input className="user-input"></Input>
            </Form.Item>
            <Form.Item
              className="form-item"
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input className="user-input"></Input>
            </Form.Item>
            <Form.Item className="form-item" style={{ marginTop: "35px" }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  height: "45px",
                  marginTop: "20px",
                }}
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Row>
    </div>
  );
}

export default Login;
