import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home";

const urlBase = "https://api.sunrise-sunset.org";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

export default urlBase;
