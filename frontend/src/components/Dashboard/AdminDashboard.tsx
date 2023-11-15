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
import CreateSalaryAnnexure from "../Payroll/Pages/PostSalaryAnnexure";
import GetAllSalaryAnnexure from "../Payroll/Pages/GetAllSalaryAnnexure";
import UpdateSalaryAnnexure from "../Payroll/Pages/UpdateSalaryAnnexure";
import GetAllAttendance from "../Attendance Records/Pages/AttendanceRecords/GetAllAttendance";
import PostAttendance from "../Attendance Records/Pages/AttendanceRecords/PostAttendance";
import UpdateAttendance from "../Attendance Records/Pages/AttendanceRecords/UpdateAttendance";
import GetAllPayrollProcessing from "../Payroll Processing/Pages/GetPayrollProcessing";
import PostPayrollProcessing from "../Payroll Processing/Pages/PostPayrollProcessing";
import UpdatePayrollProcessing from "../Payroll Processing/Pages/UpdatePayrollProcessing";

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
              <Route path="/revenue" element={<GetAllRevenue />}></Route>
            </Routes>
            <Routes>
              <Route path="/attendance" element={<GetAllAttendance />}></Route>
            </Routes>
            <Routes>
              <Route path="/postattendance" element={<PostAttendance />}></Route>
            </Routes>
            <Routes>
              <Route path="/updateattendance/:attendance_id" element={<UpdateAttendance />}></Route>
            </Routes>
            <Routes>
              <Route path="/payroll" element={<GetAllSalaryAnnexure />}></Route>
            </Routes>
            <Routes>
              <Route path="/create" element={<CreateSalaryAnnexure />}></Route>
            </Routes>
            <Routes>
              <Route path="/put/:annexureId" element={<UpdateSalaryAnnexure />}></Route>
            </Routes>
            <Routes>
              <Route path="/payroll-processing" element={<GetAllPayrollProcessing />}></Route>
            </Routes>
            <Routes>
              <Route path="/postpayroll-processing" element={<PostPayrollProcessing />}></Route>
            </Routes>
            <Routes>
              <Route path="/updatepayroll-processing/:annexureId" element={<UpdatePayrollProcessing />}></Route>
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
