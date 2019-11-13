import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";

/* render is called to render our App to the DOM insde of a div
   with an id of root inside of our index.html */
ReactDOM.render(<App initialCount={0} />, document.getElementById("root"));
