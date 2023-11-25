import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";

import PieChart from "./PieChart";
import PieChartCircle from "./PieChartCircle";

import GetAllCourses from "../Courses/Pages/GetAllCourses";
import GetAllRevenue from "../Revenue/Pages/RevenueCategory/GetAllRevenue";
import Coursescrud from "../Courses/Pages/Coursescrud";
import Updatecourse from "../Courses/Pages/UpdateCourse";
import Createcourse from "../Courses/Pages/CreateCourse";
import Gettimetable from "../Timetable/Pages/Gettietable";
import GetFaculty from "../Faculty/Pages/GetFaculty";
import FacultyDetails from "../Faculty/Pages/FacultyDetails";
import PostFaculty from "../Faculty/Pages/PostFaculty";
import TableRow from "../Timetable/Pages/AddTableRow";

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
              <Route path="/courses" element={<GetAllCourses />}></Route>
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
          </div>
        </div>
      
    </>
  );
};
export default AdminDashboard;
