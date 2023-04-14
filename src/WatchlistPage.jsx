import { useState } from "react";
import "./main.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Watchlist from "./layouts/Watchlist";

function WatchlistPage() {
  return (
    <>
      <Navigationbar />
      <Watchlist />
      <Footer />
    </>
  );
}

export default WatchlistPage;
