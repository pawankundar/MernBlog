import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";

reactDom.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
