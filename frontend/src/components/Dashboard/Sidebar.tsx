import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/style.css";
import useAuth from "../../hooks/useAuth";
const Sidebar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const { auth } = useAuth();
  // useEffect(() => {
  //   console.log("sidebar", auth);
  // }, [auth]);

  const classes = `navsidebar col-2 ${collapsed ? "d-lg-block" : "d-none"}`;
  return (
    <div className={classes}>
      <ul className="list-group list-group-flush sidebar-list d-flex flex-column">
        <li className="mt-5">
          <Link to={"/"} className="Link">
            <i className="bi bi-person-fill-lock text-dark"></i> Admin
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/courses"} className="Link">
            <i className=" bi bi-book-half text-dark"> </i>Courses
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/revenue"} className="Link">
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
          <Link to={"/userEnrollData"} className="Link">
            <i className="fa-solid fa-users"> </i> All Enrolled Users
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
            <i className="fa-solid fa-hand-holding-dollar"></i> Salary Annexure
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/attendance"} className="Link">
            <i className="fa-regular fa-calendar-check"></i> Attendance Records
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/payroll-processing"} className="Link">
            <i className="fas fa-calculator"></i> Payroll Processing
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/letter"} className="Link">
            <i className="fa-solid fa-envelope"></i> Relieving Letter
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/offerLetter"} className="Link">
            <i className="fa-solid fa-envelope"></i> Offer Letter
          </Link>
        </li>{" "}
        <li className="mt-3">
          <Link to={"/course_admin"} className="Link">
            <i className="bi bi-graph-up-arrow"> </i>Available Courses
          </Link>
        </li>
        {/* <li className="mt-3">
            <Link to={"/time_table"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Time-table
            </Link>
          </li> */}
        <li className="mt-3">
          <Link to={"/getFaculty"} className="Link">
            <i className="bi bi-graph-up-arrow"> </i>Faculty
          </Link>
        </li>
        <li className="mt-3">
          <Link to={"/EnrollmentData"} className="Link">
            <i className="bi bi-graph-up-arrow"> </i>Enrollment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
