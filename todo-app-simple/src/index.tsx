import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ContextedApp from "./ContextedApp";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextedApp />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
