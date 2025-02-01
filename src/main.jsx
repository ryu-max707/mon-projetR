// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1 className="text-3xl font-bold underline">Hello, world!</h1>);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
