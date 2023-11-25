import React from "react";
import { Link } from "react-router-dom";
import "../../style/style.css";
const Sidebar = () => {
  return (
    <>
      <div className="navsidebar">
        <ul className="list-group sidebarlist d-flex flex-column ">
          <li className="mt-5">
            <Link to={"/"} className="Link">
              <i className="bi bi-person-fill-lock text-dark"></i> Admin
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"} className="Link">
              <i className="bi bi-person-fill text-dark"> </i>Mentor
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"} className="Link">
              <i className="bi-person-lines-fill text-dark"> </i>Student
            </Link>
          </li>
          <li className="mt-3">

            <Link to={"/courses"} className="Link">
              <i className=" bi bi-book-half text-dark"> </i>Courses

            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"} className="Link">
              <i className="bi bi-file-text-fill text-dark"> </i>Carriculam
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/revenue"} className="Link">
 <Link to={"/getrevenue"} className="Link">
 <Link to={"/rev"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Revenue
            </Link>
          </li>
 <li className="mt-3">
            <Link to={"/getIncome"} className="Link">
              <i className="bi bi-currency-rupee"> </i>Income
            </Link>
          </li>

          <li className="mt-3">
            <Link to={"/getExpense"} className="Link">
              <i className="bi bi-currency-exchange"> </i>Expense
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/urole"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>User Roles
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/users"} className="Link">
              <i className="fa-solid fa-users"> </i> All Users
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/isActive"} className="Link">
              <i className="fa-solid fa-users"> </i> All Active Users
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/payroll"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Salary Annexure
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/attendance"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Attendance Records
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/payroll-processing"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Payroll Processing
            </Link>
          </li>          <li className="mt-3">
            <Link to={"/course_admin"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Course_crud
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/time_table"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Time-table
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/getFaculty"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Faculty
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Sidebar;
