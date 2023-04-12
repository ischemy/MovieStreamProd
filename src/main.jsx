import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Detail from "./DetailPage";
import Watchlist from "./WatchlistPage";

import "./main.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/detail/:id",
    element: (
      <>
        <Detail />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/watchlist",
    element: (
      <>
        <Watchlist />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
