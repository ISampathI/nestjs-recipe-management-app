import React from "react";
import "./navBar.scss";
import { Typography, Row, Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// NavBar component for rendering a navigation bar
function NavBar({ nav = false }) {
  return (
    <Row className="NavBar">
      <Link to="/" style={{ marginRight: "auto" }}>
        <Row className="logo" justify="center">
          <i className="fa-solid fa-burger"></i>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: "bold" }}>
            ReciSave
          </Typography.Title>
        </Row>
      </Link>
      <Button
        type="text"
        icon={<SyncOutlined />}
        style={{ marginRight: "10px" }}
      />
      <Link to="/add">
        <Button type="primary">ADD A RECIPE</Button>
      </Link>
    </Row>
  );
}

export default NavBar;
