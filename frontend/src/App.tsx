import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UpdateRevenue from "./components/Revenue/Pages/RevenueCategory/UpdateRevenue";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";
import ProtectedRoute from "./components/User/ProtectedRoute";
import DashboardCards from "./components/Dashboard/DashboardCards";
import PageNotFound from "./components/PageNotFound";
import GetAllCourses from "./components/Courses/Pages/GetAllCourses";
import UpdateRole from "./components/Urole/Pages/UpdateRole";
import AddRole from "./components/Urole/Pages/AddRole";
import UserProfile from "./components/Urole/Pages/UserProfile";
import GetAllUrole from "./components/Urole/Pages/GetAllUrole";
import ForgotPwd from "./components/User/ForgotPwd";
import UpdateUser from "./components/User/UpdateUser";
import DeactiveUser from "./components/User/DeactiveUser";
import AllUsers from "./components/User/AllUsers";
import GetAllEnrollUsers from "./components/UserEnrollment/Pages/GetAllEnrollUsers";
import UpdateEnrollUser from "./components/UserEnrollment/Pages/UpdateEnrollUser";
import GetAllRevenue from "./components/Revenue/Pages/RevenueCategory/GetAllRevenue";
import AllActiveUsers from "./components/User/AllActiveUsers";
import GetAllAttendance from "./components/Attendance Records/Pages/AttendanceRecords/GetAllAttendance";
import PostAttendance from "./components/Attendance Records/Pages/AttendanceRecords/PostAttendance";
import UpdateAttendance from "./components/Attendance Records/Pages/AttendanceRecords/UpdateAttendance";
import EnrollUser from "./components/UserEnrollment/Pages/EnrollUser";
import GetAllSalaryAnnexure from "./components/Payroll/Pages/GetAllSalaryAnnexure";
import CreateSalaryAnnexure from "./components/Payroll/Pages/PostSalaryAnnexure";
import UpdateSalaryAnnexure from "./components/Payroll/Pages/UpdateSalaryAnnexure";
import GetAllPayrollProcessing from "./components/Payroll Processing/Pages/GetPayrollProcessing";
import PostPayrollProcessing from "./components/Payroll Processing/Pages/PostPayrollProcessing";
import UpdatePayrollProcessing from "./components/Payroll Processing/Pages/UpdatePayrollProcessing";
import RelievingLetter from "./components/Relieving Letter/Page/RelievingLetter";
import OfferLetter from "./components/Offer Letter/Page/OfferLetter";
import AddRevenueCategory from "./components/Revenue/Pages/RevenueCategory/AddRevenueCategory";
import GetAllIncomeInfo from "./components/Revenue/Pages/Income/GetAllIncomeInfo";
import UpdateIncomeInfoById from "./components/Revenue/Pages/Income/UpdateIncomeInfoById";
import AddIncomeInfo from "./components/Revenue/Pages/Income/AddIncomeInfo";
import GetAllIExpenseInfo from "./components/Revenue/Pages/Expense/GetAllIExpenseInfo";
import UpdateExpenseInfoById from "./components/Revenue/Pages/Expense/UpdateExpenseInfoById";
import AddExpenseInfo from "./components/Revenue/Pages/Expense/AddExpenseInfo";
import Coursescrud from "./components/Courses/Pages/Coursescrud";
import Updatecourse from "./components/Courses/Pages/UpdateCourse";
import Createcourse from "./components/Courses/Pages/CreateCourse";
import Gettimetable from "./components/Timetable/Pages/Gettietable";
import GetFaculty from "./components/Faculty/Pages/GetFaculty";
import FacultyDetails from "./components/Faculty/Pages/FacultyDetails";
import PostFaculty from "./components/Faculty/Pages/PostFaculty";
import TableRow from "./components/Timetable/Pages/AddTableRow";
import Enrollment from "./components/Enrollment/Pages/GetAllEnrollment";
import { UserRoles } from "./utils/UserRoles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="registration" Component={Registration} />
          <Route path="/login" Component={Login} />
          <Route path="/" element={<AdminDashboard />}>
            <Route
              element={
                <ProtectedRoute
                  allowedRoles={[UserRoles.STUDENT, UserRoles.ADMIN]}
                />
              }
            >
              <Route path="/" element={<DashboardCards />} />
              <Route path="/courses" element={<GetAllCourses />} />
              <Route path="/updateurole/:id" element={<UpdateRole />} />
              <Route path="/urole" element={<GetAllUrole />} />
              <Route path="/addurole" element={<AddRole />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<ForgotPwd />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/updateuser/:id" element={<UpdateUser />} />
              <Route path="/deactivate/:id" element={<DeactiveUser />} />
              <Route path="/users" element={<AllUsers />} />
              <Route path="/userEnrollData" element={<GetAllEnrollUsers />} />
              <Route path="/updateEnroll/:id" element={<UpdateEnrollUser />} />
              <Route path="/revenue" element={<GetAllRevenue />} />
              <Route path="/isActive" element={<AllActiveUsers />} />
              <Route path="/attendance" element={<GetAllAttendance />} />
              <Route path="/postattendance" element={<PostAttendance />} />
              <Route path="/enroll" element={<EnrollUser />} />
              <Route
                path="/updateattendance/:attendance_id"
                element={<UpdateAttendance />}
              />
              <Route path="/payroll" element={<GetAllSalaryAnnexure />} />
              <Route path="/create" element={<CreateSalaryAnnexure />} />
              <Route
                path="/put/:annexureId"
                element={<UpdateSalaryAnnexure />}
              />
              <Route
                path="/payroll-processing"
                element={<GetAllPayrollProcessing />}
              />
              <Route
                path="/postpayroll-processing"
                element={<PostPayrollProcessing />}
              />
              <Route
                path="/updatepayroll-processing/:payroll_id"
                element={<UpdatePayrollProcessing />}
              />
              <Route path="/letter" element={<RelievingLetter />} />
              <Route path="/offerLetter" element={<OfferLetter />} />
              {/* Revenue Code Below */}
              <Route path="/getrevenue" element={<GetAllRevenue />} />
              <Route path="/updateRevenue/:id" element={<UpdateRevenue />} />
              <Route
                path="/addrevenuecategory"
                element={<AddRevenueCategory />}
              />
              <Route path="/getIncome" element={<GetAllIncomeInfo />} />
              <Route
                path="/updateIncome/:incomeId"
                element={<UpdateIncomeInfoById />}
              />
              <Route path="/addIncome" element={<AddIncomeInfo />} />
              <Route path="/getExpense" element={<GetAllIExpenseInfo />} />
              <Route
                path="/updateExpense/:expenseId"
                element={<UpdateExpenseInfoById />}
              />
              <Route path="/addExpense" element={<AddExpenseInfo />} />
              <Route path="/course_admin" element={<Coursescrud />} />
              <Route path="/course_update/:Id" element={<Updatecourse />} />
              <Route path="/create_course" element={<Createcourse />} />
              <Route path="/time_table" element={<Gettimetable />} />
              <Route path="/getFaculty" element={<GetFaculty />} />
              <Route
                path="/facultyDetails/:userId"
                element={<FacultyDetails />}
              />
              <Route path="/Assign_Faculty" element={<PostFaculty />} />
              <Route path="/add_timeTable_row" element={<TableRow />} />
              <Route path="/EnrollmentData" element={<Enrollment />} />
              /
              <Route path="*" Component={PageNotFound} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
