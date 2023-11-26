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
import Registration from "../User/Registration";
import AllUsers from "../User/AllUsers";
import CreateSalaryAnnexure from "../Payroll/Pages/PostSalaryAnnexure";
import GetAllSalaryAnnexure from "../Payroll/Pages/GetAllSalaryAnnexure";
import UpdateSalaryAnnexure from "../Payroll/Pages/UpdateSalaryAnnexure";
import GetAllAttendance from "../Attendance Records/Pages/AttendanceRecords/GetAllAttendance";
import PostAttendance from "../Attendance Records/Pages/AttendanceRecords/PostAttendance";
import UpdateAttendance from "../Attendance Records/Pages/AttendanceRecords/UpdateAttendance";
import GetAllPayrollProcessing from "../Payroll Processing/Pages/GetPayrollProcessing";
import PostPayrollProcessing from "../Payroll Processing/Pages/PostPayrollProcessing";
import UpdatePayrollProcessing from "../Payroll Processing/Pages/UpdatePayrollProcessing";
import UpdateRevenue from "../Revenue/Pages/RevenueCategory/UpdateRevenue";
import AddRevenueCategory from "../Revenue/Pages/RevenueCategory/AddRevenueCategory";
import AddRole from "../Urole/Pages/AddRole";
import UpdateRole from "../Urole/Pages/UpdateRole";
import GetAllIncomeInfo from "../Revenue/Pages/Income/GetAllIncomeInfo";
import UpdateIncomeInfoById from "../Revenue/Pages/Income/UpdateIncomeInfoById";
import AddIncomeInfo from "../Revenue/Pages/Income/AddIncomeInfo";
import GetAllIExpenseInfo from "../Revenue/Pages/Expense/GetAllIExpenseInfo";
import UpdateExpenseInfoById from "../Revenue/Pages/Expense/UpdateExpenseInfoById";
import AddExpenseInfo from "../Revenue/Pages/Expense/AddExpenseInfo";
import RelievingLetter from "../Relieving Letter/Page/RelievingLetter";
import OfferLetter from "../Offer Letter/Page/OfferLetter";


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
              <Route path="/users" element={<AllUsers />}></Route>
              <Route path="/revenue" element={<GetAllRevenue />}></Route>
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
            <Routes>
              <Route path="/letter" element={<RelievingLetter />}></Route>
            </Routes>

            <Routes>
              <Route path="/offerLetter" element={<OfferLetter />}></Route>
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
            <Routes>
              <Route path="/login" element={<Login />}></Route>
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
