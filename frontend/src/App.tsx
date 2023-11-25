import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UpdateRevenue from "./components/Revenue/Pages/RevenueCategory/UpdateRevenue";


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
