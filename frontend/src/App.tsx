import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserHome from "./pages/user-home/UserHome";
import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import NewRecipe from "./pages/new-recipe/NewRecipe";
import EditRecipe from "./pages/edit-recipe/EditRecipe";
import ViewRecipe from "./pages/view-recipe/ViewRecipe";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

const theme = {
  token: {
    colorPrimary: "#5BC18F",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route> {/* Home page */}
          <Route path="/user" element={<UserHome />}></Route> {/* Home page */}
          <Route path="/add" element={<NewRecipe />}></Route>
          {/* Add recipe page */}
          <Route path="/edit" element={<EditRecipe />}></Route>
          {/* Edit recipe page */}
          <Route path="/view" element={<ViewRecipe />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
