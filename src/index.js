import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// imbed components in an XML like syntax like the app here
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
