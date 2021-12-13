import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ContextedApp from "./ContextedApp";
import "./index.css";
import { TodoProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
        <ContextedApp />
      </TodoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
