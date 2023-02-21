import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./home.css";
import Home from "./Home";
import Contatti from "./pages/contatti/Contatti";
import Prenotazione from "./pages/prenotazione/Prenotazione";
import Admin from "./pages/admin/Admin";

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
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
