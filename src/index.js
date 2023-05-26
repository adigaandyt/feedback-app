import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// imbed components in an XML like syntax like the app here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
