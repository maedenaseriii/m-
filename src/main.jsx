import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouterProvider from "./providers/AppRouterProvider";
// import AppReduxProvider from './providers/AppReduxProvider'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppReduxProvider> */}
      <AppRouterProvider />
    {/* </AppReduxProvider> */}
  </React.StrictMode>
);
