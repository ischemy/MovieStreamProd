import { useState } from "react";
import "./main.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./layouts/Detail";

function App() {
  return (
    <>
      <Navigationbar />
      <Detail />
      <Footer />
    </>
  );
}

export default App;
