import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { AuthProvider } from "./context/AuthContext";
import { BackendProvider } from "./context/BackendContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AuthProvider>
      <BackendProvider>
        <App />
      </BackendProvider>
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
