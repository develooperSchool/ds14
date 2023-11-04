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

            <Link to={"/course"} className="Link">
              <i className=" bi bi-book-half text-dark"> </i>Cource

            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"} className="Link">
              <i className="bi bi-file-text-fill text-dark"> </i>Carriculam
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/revenue"} className="Link">
              <i className="bi bi-graph-up-arrow"> </i>Revenue
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
