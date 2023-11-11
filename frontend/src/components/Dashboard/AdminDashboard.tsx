import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";
import GetAllCourse from "../Course/GetAllCourse";
import PieChart from "./PieChart";
import PieChartCircle from "./PieChartCircle";
import Login from "../User/Login";
import ForgotPwd from "../User/ForgotPwd";
import GetAllRevenue from "../Revenue/Pages/RevenueCategory/GetAllRevenue";
import GetAllUrole from "../Urole/Pages/GetAllUrole";
import UserProfile from "../Urole/Pages/UserProfile";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>

          <div className="col-lg-10">
            <Topbar />
            <Routes>
              <Route path="/" element={<Card />}></Route>
            </Routes>
            <Routes>
              <Route path="/course" element={<GetAllCourse />}></Route>
            </Routes>
            <Routes>
              <Route path="/urole" element={<GetAllUrole />}></Route>
            </Routes>
            <Routes>
              <Route path="/UserProfile" element={<UserProfile />}></Route>
            </Routes>
          </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/" element={<PieChart />}></Route>
                  </Routes>
                </div>

                <div className="col-lg-6">
                  <Routes>
                    <Route path="/" element={<PieChartCircle />}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
export default AdminDashboard;
