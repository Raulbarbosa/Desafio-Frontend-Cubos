import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MainRoutes />
    </Router>
  </React.StrictMode>
);

//teste
