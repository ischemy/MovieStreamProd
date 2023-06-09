import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailPage from "./DetailPage";
import WatchlistPage from "./WatchlistPage";

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
  },
  {
    path: "/detail/:id",
    element: (
      <>
        <DetailPage />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/watchlist",
    element: (
      <>
        <WatchlistPage />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
