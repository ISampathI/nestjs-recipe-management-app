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
    <div className="w-screen h-screen Home">
      <HomeNavBar></HomeNavBar>
      <div className="hero-section w-full justify-center px-10 sm:px-[100px] h-[calc(100%-3.5rem)] items-center flex relative">
        <div className="z-10 flex flex-col items-center w-full mx-auto mb-12 sm:items-start lg:w-11/12 hero-content">
          <Typography.Text
            className="font-bold text-left hero-title lg:text-8xl text-7xl"
            style={{ color: "#5BC18F" }}
          >
            <span className="" style={{ color: "#5BC18F" }}>
              ReciSave
            </span>
          </Typography.Text>
          <Typography.Text className="hero-sub-title font-semibold lg:text-4xl mt-4 ml-[10px] text-2xl sm:text-3xl text-left">
            Your Culinary Playground
          </Typography.Text>
          <Typography.Text className="text-center hero-para lg:text-[1.3rem] text-[1.1rem] w-full md:w-3/5 lg:w-6/12 ml-[10px] mt-4 leading-10 sm:text-left">
            Step into a culinary wonderland where creativity thrives and flavors
            unite. Join our global community and let's make every meal an
            unforgettable experience.
          </Typography.Text>
          <Button
            className="hero-btn mt-[50px] w-[200px] h-[50px] ml-[10px]"
            type="primary"
          >
            GET STARTED
          </Button>
        </div>
        <div className="absolute z-0 w-full h-full sm:w-3/5 md:w-2/5 sm:right-0 hero-img opacity-5 sm:opacity-10 md:opacity-100">
          <div className="relative w-full h-full bg-center bg-no-repeat bg-contain img">
            <div className="dec-1 w-1/2 aspect-square right-0 bottom-[15%] bg-cover absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
