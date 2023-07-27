import React from "react";
import "./home.scss";
import HomeNavBar from "../../components/home-nav-bar/HomeNavBar";
import { Button, Col, Typography } from "antd";

function Home() {
  return (
    <div className="Home">
      <HomeNavBar></HomeNavBar>
      <div className="hero-section">
        <div className="hero-content">
          <Typography.Text className="hero-title">
            <span style={{ fontSize: "6rem", fontWeight: "700" }}>W</span>elcome
            to{" "}
            <span style={{ color: "#5BC18F", fontWeight: "600" }}>
              ReciSave
            </span>
          </Typography.Text>
          <Typography.Text className="hero-sub-title">
            Your Culinary Playground
          </Typography.Text>
          <Typography.Text className="hero-para">
            Step into a culinary wonderland where creativity thrives and flavors
            unite. Join our global community and let's make every meal an
            unforgettable experience.
          </Typography.Text>
          <Button className="hero-btn" type="primary">
            GET STARTED
          </Button>
        </div>
        <div className="hero-img">
          <div className="img">
            <div className="dec-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
