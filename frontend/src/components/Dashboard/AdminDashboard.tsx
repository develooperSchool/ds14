import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Routes, Route } from "react-router-dom";
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
import RelievingLetter from "../Relieving Letter/Page/RelievingLetter";
import OfferLetter from "../Offer Letter/Page/OfferLetter";

import AddIncomeInfo from "../Revenue/Pages/Income/AddIncomeInfo";
import GetAllIncomeInfo from "../Revenue/Pages/Income/GetAllIncomeInfo";
import UpdateIncomeInfoById from "../Revenue/Pages/Income/UpdateIncomeInfoById";
import AllActiveUsers from "../User/AllActiveUsers";
import DeactiveUser from "../User/DeactiveUser";
import UpdateUser from "../User/UpdateUser";
import GetAllUrole from "../Urole/Pages/GetAllUrole";
import UserProfile from "../Urole/Pages/UserProfile";
import Login from "../User/Login";
import GetAllAttendance from "../Attendance Records/Pages/AttendanceRecords/GetAllAttendance";
import Coursescrud from "../Courses/Pages/Coursescrud";
import Createcourse from "../Courses/Pages/CreateCourse";
import Updatecourse from "../Courses/Pages/UpdateCourse";
import FacultyDetails from "../Faculty/Pages/FacultyDetails";
import GetFaculty from "../Faculty/Pages/GetFaculty";
import PostFaculty from "../Faculty/Pages/PostFaculty";
import GetAllSalaryAnnexure from "../Payroll/Pages/GetAllSalaryAnnexure";
import CreateSalaryAnnexure from "../Payroll/Pages/PostSalaryAnnexure";
import UpdateSalaryAnnexure from "../Payroll/Pages/UpdateSalaryAnnexure";
import TableRow from "../Timetable/Pages/AddTableRow";
import Gettimetable from "../Timetable/Pages/Gettietable";
import AllUsers from "../User/AllUsers";
import ForgotPwd from "../User/ForgotPwd";
import Registration from "../User/Registration";
import Enrollment from "../Enrollment/Pages/GetAllEnrollment";
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

              <Route path="/courses" element={<GetAllCourses />}></Route>

              <Route path="/updateurole/:id" element={<UpdateRole />}></Route>

              <Route path="/urole" element={<GetAllUrole />}></Route>

              <Route path="/addurole" element={<AddRole />}></Route>

              <Route path="/UserProfile" element={<UserProfile />}></Route>
              {/* <Route path="/getrevenue" element={<GetAllRevenue />}></Route> */}
              <Route path="/login" element={<Login />}></Route>

              <Route path="/forgot" element={<ForgotPwd />}></Route>

              <Route path="/register" element={<Registration />}></Route>

              <Route path="/updateuser/:id" element={<UpdateUser />}></Route>

              <Route path="/deactivate/:id" element={<DeactiveUser />}></Route>

              <Route path="/users" element={<AllUsers />}></Route>
              <Route path="/revenue" element={<GetAllRevenue />}></Route>

              <Route path="/isActive" element={<AllActiveUsers />}></Route>

              <Route path="/attendance" element={<GetAllAttendance />}></Route>

              <Route
                path="/postattendance"
                element={<PostAttendance />}
              ></Route>

              <Route
                path="/updateattendance/:attendance_id"
                element={<UpdateAttendance />}
              ></Route>

              <Route path="/payroll" element={<GetAllSalaryAnnexure />}></Route>

              <Route path="/create" element={<CreateSalaryAnnexure />}></Route>

              <Route
                path="/put/:annexureId"
                element={<UpdateSalaryAnnexure />}
              ></Route>

              <Route
                path="/payroll-processing"
                element={<GetAllPayrollProcessing />}
              ></Route>

              <Route
                path="/postpayroll-processing"
                element={<PostPayrollProcessing />}
              ></Route>

              <Route
                path="/updatepayroll-processing/:payroll_id"
                element={<UpdatePayrollProcessing />}
              ></Route>

              <Route path="/letter" element={<RelievingLetter />}></Route>

              <Route path="/offerLetter" element={<OfferLetter />}></Route>

              {/* Revenue Code Below */}

              <Route path="/getrevenue" element={<GetAllRevenue />}></Route>
              <Route
                path="/updateRevenue/:id"
                element={<UpdateRevenue />}
              ></Route>

              <Route
                path="/addrevenuecategory"
                element={<AddRevenueCategory />}
              ></Route>

              <Route path="/getIncome" element={<GetAllIncomeInfo />}></Route>

              <Route
                path="/updateIncome/:incomeId"
                element={<UpdateIncomeInfoById />}
              ></Route>

              <Route path="/addIncome" element={<AddIncomeInfo />}></Route>

              <Route
                path="/getExpense"
                element={<GetAllIExpenseInfo />}
              ></Route>

              <Route
                path="/updateExpense/:expenseId"
                element={<UpdateExpenseInfoById />}
              ></Route>

              <Route path="/addExpense" element={<AddExpenseInfo />}></Route>
              <Route path="/course_admin" element={<Coursescrud />}></Route>
              <Route
                path="/course_update/:Id"
                element={<Updatecourse />}
              ></Route>
              <Route path="/create_course" element={<Createcourse />}></Route>
              <Route path="/time_table" element={<Gettimetable />}></Route>
              <Route path="/getFaculty" element={<GetFaculty />}></Route>
              <Route
                path="/facultyDetails/:userId"
                element={<FacultyDetails />}
              ></Route>
              <Route path="/Assign_Faculty" element={<PostFaculty />}></Route>
              <Route path="/add_timeTable_row" element={<TableRow />}></Route>
              <Route path="/EnrollmentData" element={<Enrollment />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
