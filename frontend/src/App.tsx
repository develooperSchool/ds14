import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
