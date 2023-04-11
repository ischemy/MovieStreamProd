import { useState } from "react";
import "./main.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./layouts/Home";

function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
