import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PetProvider } from "./context/PetContext";

ReactDOM.render(
  <React.StrictMode>
    <PetProvider>
      <App />
    </PetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
