import React from "react";
import "./login.scss";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { UserLogin } from "../../utils/types/userType";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/userActions ";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handleSubmit = async (formData: UserLogin) => {
    await axios
      .post(`${API_ADDRESS}/auth/login`, formData)
      .then((res) => {
        dispatch(setUser(res.data));
        Cookies.set("access_token", res.data.access_token, { expires: 1 });
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="relative grid w-screen h-screen Login place-content-center">
      <div className="login-container sm:flex sm:w-[500px] overflow-hidden rounded-2xl bg-white">
        <div className="w-full bg-cover sm:w-2/5 h-14 sm:h-full side-img"></div>
        <Row className="w-full p-5 sm:w-3/5 sm:h-full login-form">
          <Typography.Title
            className="w-full !mb-8 text-center"
            level={2}
          >
            LOGIN
          </Typography.Title>
          <Form
            form={form}
            onFinish={handleSubmit}
            className="w-full h-full form"
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
              <Input type="password" className="user-input"></Input>
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
      </div>
    </div>
  );
}

export default Login;
