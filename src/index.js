import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const urlBase = "https://api.sunrise-sunset.org";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default urlBase;
