import React from "react";
import ReactDOM from "react-dom/client";

//jsx
const jsxhead = <h1>van jsx</h1>;
//react functional component(normal js function which returns jsx)
const headcomponent = () => {
  return <h3>Fist Component</h3>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headcomponent());
