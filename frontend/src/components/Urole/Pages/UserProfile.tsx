import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { IRegisterData } from "../../User/Model/Iuser";
// import { Link,useHistory } from "react-router-dom";

function UserProfile() {
  let user: IRegisterData = {
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
    qualification: "",
    passing_year: 0,
    dob: "",
    gender: "",
    caste_category: "",
    subcaste: "",
    password: "",
  };
  

  let data = localStorage.getItem("userData");
  data = data !== null ? user = JSON.parse(data) : data;


  function logOut(){
    localStorage.clear();
  }

  

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{}</h5>
          <p className="card-text">Web Developer</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Email: {user.email}</strong>
            </li>
            <li className="list-group-item">
              <strong>contact: {user.contact}</strong>
            </li>
          </ul>
        </div>
        {/* <button className="btn" onClick={logOut}>Logout</button> */}
      </div>
    </div>
  );
}

export default UserProfile;
