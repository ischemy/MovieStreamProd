import { useState } from "react";
import "./main.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./layouts/Login";

function LoginPage() {
 
  return (
    <>
      <Navigationbar />
      <Login />
    </>
  );
}

export default LoginPage;
