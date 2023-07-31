import React, { useEffect } from "react";
import "./home.scss";
import HomeNavBar from "../../components/home-nav-bar/HomeNavBar";
import { Button, Col, Typography } from "antd";
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/userActions ";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      const userData: any = decodeToken(token);
      dispatch(
        setUser({
          access_token: token,
          user: {
            id: userData.sub,
            username: userData.username,
            email: userData.email,
          },
        })
      );
      console.log(userData);
    }
  }, []);
  return (
    <div className="Home w-screen h-screen">
      <HomeNavBar></HomeNavBar>
      <div className="hero-section w-full px-[100px] h-[calc(100%-3.5rem)] items-center flex relative">
        <div className="hero-content items-start mx-auto flex flex-col w-11/12 mb-12">
          <Typography.Text className="hero-title text-7xl font-medium">
            <span className="text-8xl font-bold">W</span>elcome to{" "}
            <span className="font-semibold" style={{ color: "#5BC18F" }}>
              ReciSave
            </span>
          </Typography.Text>
          <Typography.Text className="hero-sub-title font-semibold text-4xl mt-4 ml-[10px]">
            Your Culinary Playground
          </Typography.Text>
          <Typography.Text className="hero-para text-[1.3rem] w-1/2 ml-[10px] mt-4 leading-10 text-left">
            Step into a culinary wonderland where creativity thrives and flavors
            unite. Join our global community and let's make every meal an
            unforgettable experience.
          </Typography.Text>
          <Button className="hero-btn mt-[50px] w-[200px] h-[50px] ml-[10px]" type="primary">
            GET STARTED
          </Button>
        </div>
        <div className="hero-img absolute h-full w-2/5 right-0">
          <div className="img">
            <div className="dec-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
