import React from "react";
import "./register.scss";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { API_ADDRESS } from "../../utils/helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserRegister } from "../../utils/types/userType";

export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async (formData: UserRegister) => {
    console.log(formData);
    await axios
      .post(`${API_ADDRESS}/auth/register`, formData)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {});
  };

  return (
    <div className="Register">
      <Row className="container">
        <div className="side-img"></div>
        <Row className="login-form">
          <Typography.Title
            style={{ marginBottom: "25px", width: "100%", textAlign: "center" }}
            level={2}
          >
            REGISTER
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
              name="email"
              label="Email Address"
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
              <Input type="password" className="user-input"></Input>
            </Form.Item>
            <Form.Item
              className="form-item"
              name="confirmPassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input type="password" className="user-input"></Input>
            </Form.Item>
            <Form.Item className="form-item" style={{ marginTop: "35px" }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  height: "45px",
                  marginTop: "10px",
                }}
              >
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Row>
    </div>
  );
}
