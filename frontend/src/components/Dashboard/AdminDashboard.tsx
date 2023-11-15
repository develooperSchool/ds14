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
import Registration from "../User/Registration";
import AllUsers from "../User/AllUsers";
import UpdateRevenue from "../Revenue/Pages/RevenueCategory/UpdateRevenue";
import AddRevenueCategory from "../Revenue/Pages/RevenueCategory/AddRevenueCategory";

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
            <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Routes>
              <Route path="/forgot" element={<ForgotPwd />}></Route>
            </Routes>
            <Routes>
              <Route path="/register" element={<Registration />}></Route>
            </Routes>
            <Routes>
              <Route path="/users" element={<AllUsers />}></Route>
              <Route path="/revenue" element={<GetAllRevenue />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/updaterevenue/:id"
                element={<UpdateRevenue />}
              ></Route>
            </Routes>

            <Routes>
              <Route
                path="/addrevenuecategory"
                element={<AddRevenueCategory />}
              ></Route>
            </Routes>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <Routes>
                  <Route path="/" element={<PieChart />}></Route>
                </Routes>
              </div>
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
      </div>
    </>
  );
};
export default AdminDashboard;
