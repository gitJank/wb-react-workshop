import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Here our App is just a function that returns an h1
const App = () => <h1>Hello Worlds Best React Workshop</h1>;

/* render is called to render our App to the DOM insde of a div
   with an id of root inside of our index.html */
ReactDOM.render(<App />, document.getElementById("root"));
