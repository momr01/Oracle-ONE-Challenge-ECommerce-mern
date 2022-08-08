import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import styles from "./css/media-queries.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //  <React.StrictMode>
  <App className={styles} />
  //  </React.StrictMode>
);
