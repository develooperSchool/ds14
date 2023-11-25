import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";

import PieChart from "./PieChart";
import PieChartCircle from "./PieChartCircle";

import GetAllCourses from "../Courses/Pages/GetAllCourses";
import GetAllRevenue from "../Revenue/Pages/RevenueCategory/GetAllRevenue";
import PostAttendance from "../Attendance Records/Pages/AttendanceRecords/PostAttendance";
import UpdateAttendance from "../Attendance Records/Pages/AttendanceRecords/UpdateAttendance";
import GetAllPayrollProcessing from "../Payroll Processing/Pages/GetPayrollProcessing";
import PostPayrollProcessing from "../Payroll Processing/Pages/PostPayrollProcessing";
import UpdatePayrollProcessing from "../Payroll Processing/Pages/UpdatePayrollProcessing";
import UpdateRevenue from "../Revenue/Pages/RevenueCategory/UpdateRevenue";
import AddRevenueCategory from "../Revenue/Pages/RevenueCategory/AddRevenueCategory";
import AddRole from "../Urole/Pages/AddRole";
import UpdateRole from "../Urole/Pages/UpdateRole";
import GetAllIExpenseInfo from "../Revenue/Pages/Expense/GetAllIExpenseInfo";
import UpdateExpenseInfoById from "../Revenue/Pages/Expense/UpdateExpenseInfoById";
import AddExpenseInfo from "../Revenue/Pages/Expense/AddExpenseInfo";
import AddIncomeInfo from "../Revenue/Pages/Income/AddIncomeInfo";
import GetAllIncomeInfo from "../Revenue/Pages/Income/GetAllIncomeInfo";
import UpdateIncomeInfoById from "../Revenue/Pages/Income/UpdateIncomeInfoById";
import AllActiveUsers from "../User/AllActiveUsers";
import DeactiveUser from "../User/DeactiveUser";
import UpdateUser from "../User/UpdateUser";const AdminDashboard = () => {
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
              <Route path="/courses" element={<GetAllCourses />}></Route>
            </Routes>
            <Routes>
              <Route path="/updateurole/:id" element={<UpdateRole />}></Route>
            </Routes>
            <Routes>
              <Route path="/urole" element={<GetAllUrole />}></Route>
            </Routes>
            <Routes>
              <Route path="/addurole" element={<AddRole />}></Route>
            </Routes>
            <Routes>
              <Route path="/UserProfile" element={<UserProfile />}></Route>
              {/* <Route path="/getrevenue" element={<GetAllRevenue />}></Route> */}
              <Route path="/login" element={<Login />}></Route>

            </Routes>
            <Routes>
              <Route path="/forgot" element={<ForgotPwd />}></Route>
            </Routes>
            <Routes>
              <Route path="/register" element={<Registration />}></Route>
            </Routes>
            <Routes>
              <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
            </Routes>
            <Routes>
              <Route path="/deactivate/:id" element={<DeactiveUser />}></Route>
            </Routes>
            <Routes>
              <Route path="/users" element={<AllUsers />}></Route>
              <Route path="/revenue" element={<GetAllRevenue />}></Route>
            </Routes>
            <Routes>
              <Route path="/isActive" element={<AllActiveUsers />}></Route>
            </Routes>
            <Routes>
              <Route path="/attendance" element={<GetAllAttendance />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/postattendance"
                element={<PostAttendance />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/updateattendance/:attendance_id"
                element={<UpdateAttendance />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/payroll" element={<GetAllSalaryAnnexure />}></Route>
            </Routes>
            <Routes>
              <Route path="/create" element={<CreateSalaryAnnexure />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/put/:annexureId"
                element={<UpdateSalaryAnnexure />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/payroll-processing"
                element={<GetAllPayrollProcessing />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/postpayroll-processing"
                element={<PostPayrollProcessing />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/updatepayroll-processing/:payroll_id"
                element={<UpdatePayrollProcessing />}
              ></Route>
            </Routes>

            {/* Revenue Code Below */}
            <Routes>
              <Route path="/getrevenue" element={<GetAllRevenue />}></Route>
              <Route
                path="/updateRevenue/:id"
                element={<UpdateRevenue />}
              ></Route>
            </Routes>

            <Routes>
              <Route
                path="/addrevenuecategory"
                element={<AddRevenueCategory />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/getIncome" element={<GetAllIncomeInfo />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/updateIncome/:incomeId"
                element={<UpdateIncomeInfoById />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/addIncome" element={<AddIncomeInfo />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/getExpense"
                element={<GetAllIExpenseInfo />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/updateExpense/:expenseId"
                element={<UpdateExpenseInfoById />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/addExpense" element={<AddExpenseInfo />}></Route>
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
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/rev" element={<GetAllRevenue />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/course_admin" element={<Coursescrud />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/course_update/:Id" element={<Updatecourse />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/create_course" element={<Createcourse />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/time_table" element={<Gettimetable />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/getFaculty" element={<GetFaculty />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/facultyDetails/:userId" element={<FacultyDetails />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/Assign_Faculty" element={<PostFaculty />}></Route>
                  </Routes>
                </div>
                <div className="col-lg-6">
                  <Routes>
                    <Route path="/add_timeTable_row" element={<TableRow />}></Route>
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
