import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "./Redux/store";
import { IRegister, IRegisterData } from "./Model/Iuser";
import * as UserAction from "../../Redux/UserRedux/user.action";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { start } from "repl";
import { create } from "domain";

const Registration: React.FC = () => {
  const Navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //Data from redux store

  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [create, setCreate] = useState<IRegisterData>({
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
  });

  useEffect(() => {
    reflectDate();
  }, [startDate]);

  const changeDate = (date: Date | null) => {
    setStartDate(date);
  };

  const reflectDate = () => {
    let day = startDate?.getDate();
    let month: string | number =
      startDate?.getMonth() != undefined ? startDate?.getMonth() + 1 : "";
    let year = startDate?.getFullYear();
    let fullDay: string | number = "";
    let fullMonth: string | number = "";
    if (day != undefined && month != undefined) {
      fullDay = day?.toString().length < 2 ? `0${day}` : day;
      fullMonth = month?.toString().length < 2 ? `0${month}` : month;
    }
    const formattedDate = `${fullDay}-${fullMonth}-${year}`;
    setCreate({
      ...create,
      dob: formattedDate,
    });
  };
  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
  };

  const setDefaults = () => {
    setCreate({
      first_name: "John",
      last_name: "Doe",
      email: "doe@example.com",
      contact: "9988776655",
      address: "123 Main Street",
      qualification: "Test",
      passing_year: 2013,
      dob: "05-05-2013",
      gender: "male",
      caste_category: "TEST01",
      subcaste: "TEST02",
      password: "password",
    });
  };

  const submitData = (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const data: IRegister = {
      firstName: create.first_name,
      lastName: create.last_name,
      email: create.email,
      contact: create.contact,
      address: create.address,
      qualification: create.qualification,
      passingYear: create.passing_year,
      dob: create.dob,
      gender: create.gender,
      casteCategory: create.caste_category,
      subcaste: create.subcaste,
      password: create.password,
    };
    dispatch(UserAction.createUserAction({ user: data }))
      .then((res: any) => {
        if (res && !res.data) {
          alert(res.payload.data.description);
          Navigate("/users");
        }
      })
      .catch((error: any) => console.log(error));
  };
  // const [selectedValue, setSelectedValue] = useState("");

  // const handleDropdownChange = (e: any) => {
  //   setSelectedValue(e.target.value);
  // };
  return (
    <>
      <div className="offset-lg-2 col-lg-8 mt-3">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Registration Form</h1>
            </div>
            <form onSubmit={(e) => submitData(e)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="first_name"
                        value={create.first_name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="last_name"
                        value={create.last_name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="email"
                        name="email"
                        value={create.email}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Contact</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="contact"
                        value={create.contact}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        name="address"
                        onChange={(e) => changeInputEvent(e)}
                        value={create.address}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Qualification</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="qualification"
                        value={create.qualification}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Passing Year</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="number"
                        name="passing_year"
                        value={create.passing_year}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      {/* <input
                        onChange={(e) => changeInputEvent(e)}
                        type="Date"
                        name="dob"
                        value={create.dob}
                        className="form-control"
                      /> */}
                      <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={startDate}
                        onChange={(date) => changeDate(date)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Gender</label>
                      <br />
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="radio"
                        name="gender"
                        value="male"
                      />
                      <label className="me-5">Male</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="radio"
                        name="gender"
                        value="female"
                      />
                      <label>Female</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      {/* <label>Caste</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => changeInputEvent(e)}
                        value={create.caste_category}
                        name="caste_category"
                      /> */}
                      <label>Caste</label>
                      <select
                        name="caste_category"
                        id=""
                        className="form-select"
                        aria-label="Default select example"
                        value={create.caste_category}
                        onChange={(e) => changeInputEvent(e)}
                      >
                        <option value="Select">Select</option>
                        <option value="OPEN">OPEN</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="VJNT">VJNT</option>
                        <option value="OTHER">OTHER</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Subcaste</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="subcaste"
                        value={create.subcaste}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="password"
                        name="password"
                        value={create.password}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="password"
                        name="password"
                        value={create.password}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="reset" className="btn btn-success">
                  Reset
                </button>
                {/* <button
                  type="button"
                  onClick={() => setDefaults()}
                  className="btn btn-success"
                >
                  Set Defaults
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
