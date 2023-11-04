import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="navsidebar text-start bg-secondary h-100">
        <ul className="list-group d-flex flex-column">
          <li className="mt-5">
            <Link to={"/"}>
              <i className="bi bi-person-fill-lock text-dark">Admin</i>
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"}>
              <i className="bi bi-person-fill text-dark">Mentor</i>
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"}>
              <i className="bi-person-lines-fill text-dark">Student</i>
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"/courses"}>
              <i className=" bi bi-book-half text-dark">Cource</i>
            </Link>
          </li>
          <li className="mt-3">
            <Link to={"#"}>
              <i className="bi bi-file-text-fill text-dark">Carriculam</i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
