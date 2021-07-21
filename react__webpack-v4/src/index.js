import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./Editor";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(
  <div className="App">
    <Editor />
  </div>,
  document.getElementById("root")
);
