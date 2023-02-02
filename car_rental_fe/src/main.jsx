import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Body.css";
import Home from "./Home";
import Contatti from "./pages/contatti/Contatti";
import Prenotazione from "./pages/prenotazione/Prenotazione";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/prenotazione",
    element: <Prenotazione />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
