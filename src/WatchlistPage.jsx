import { useState } from "react";
import "./main.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Watchlist from "./layouts/Watchlist";

function App() {
  return (
    <>
      <Navigationbar />
      <Watchlist />
      <Footer />
    </>
  );
}

export default App;
