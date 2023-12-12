import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { castArray } from "../../User/CastArray";
import { obcArray } from "../../User/CasteArray1";
import { IRegisterData, ICaste } from "../../User/Model/Iuser";
import { AppDispatch, RootState } from "../../User/Redux/store";
import * as UserEnrollAction from "../../../Redux/UserEnrollRedux/userEnroll.action";
import * as UserEnrollReducer from "../../../Redux/UserEnrollRedux/userEnroll.reducer";
import { IEnroll, IEnrollCaste, IEnrollData } from "../Model/IEnroll";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EnrollUser = () => {
  const Navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //Data from redux store

  const userEnrollReduxState: UserEnrollReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserEnrollReducer.userEnrollFeatureKey];
    }
  );

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [enroll, setenroll] = useState<IEnrollData>({
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
    setenroll({
      ...enroll,
      dob: formattedDate,
    });
  };
  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setenroll({
      ...enroll,
      [event.target.name]: event.target.value,
    });
  };

  var [state, setState] = useState<IEnrollCaste[]>([
    {
      category: "",
      cast_name: "",
    },
  ]);

  let castData = (input: string) => {
    var array: any;
    if (input === "SC") {
      array = castArray.SC.filter((elem: any) => {
        return elem;
      });
    } else if (input === "OPEN") {
      array = castArray.OPEN.filter((elem: any) => {
        return elem;
      });
    } else if (input === "ST") {
      array = castArray.ST.filter((elem: any) => {
        return elem;
      });
    } else if (input === "SBC") {
      array = castArray.SBC.filter((elem: any) => {
        return elem;
      });
    } else if (input === "VJNT") {
      array = castArray.VJNT.filter((elem: any) => {
        return elem;
      });
    } else if (input === "OBC") {
      array = obcArray;
    } else {
      array = [
        {
          category: "",
          cast_name: "",
        },
      ];
      return array;
    }

    setState(array);
  };
  console.log(state);

  const submitData = (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const data: IEnroll = {
      firstName: enroll.first_name,
      lastName: enroll.last_name,
      email: enroll.email,
      contact: enroll.contact,
      address: enroll.address,
      qualification: enroll.qualification,
      passingYear: enroll.passing_year,
      dob: enroll.dob,
      gender: enroll.gender,
      casteCategory: enroll.caste_category,
      subcaste: enroll.subcaste,
    };
    dispatch(UserEnrollAction.enrollUserAction({ userEnroll: data }))
      .then((res: any) => {
        if (res && !res.data) {
          alert(res.payload.data.description);
          Navigate("/users");
        }
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <>
      <div className="offset-lg-2 col-lg-8 mt-3">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Enrollment Form</h1>
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
                        value={enroll.first_name}
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
                        value={enroll.last_name}
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
                        value={enroll.email}
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
                        value={enroll.contact}
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
                        value={enroll.address}
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
                        value={enroll.qualification}
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
                        value={enroll.passing_year}
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
                        value={enroll.dob}
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
                        value={enroll.caste_category}
                        name="caste_category"
                      /> */}
                      <label>Caste</label>

                      <select
                        name="caste_category"
                        id=""
                        className="form-select"
                        aria-label="Default select example"
                        value={enroll.caste_category}
                        onClick={() => {
                          castData(enroll.caste_category);
                        }}
                        onChange={(e) => changeInputEvent(e)}
                      >
                        <option value="Select">Select</option>
                        <option value="OPEN">OPEN</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="VJNT">VJNT</option>
                        <option value="SBC">SBC</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      {enroll.caste_category != "OPEN" && (
                        <label>Subcaste</label>
                      )}
                      {enroll.caste_category != "OPEN" && (
                        <select
                          onChange={(e) => changeInputEvent(e)}
                          name="subcaste"
                          id=""
                          className="form-control"
                        >
                          <option>select</option>
                          {state.map((element: ICaste) => {
                            return (
                              <>
                                <option value={element.cast_name}>
                                  {element.cast_name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      )}
                      {/* <input<<<<<<< .mine
                        <label>Subcaste</label>
                      )}
                      {enroll.caste_category != "OPEN" && (
                        <select
                          onChange={(e) => changeInputEvent(e)}
                          name="subcaste"
                          id=""
                          className="form-control"
                        >
                          <option>select</option>
                          {state.map((element: ICaste) => {
                            return (
                              <>
                                <option value={element.cast_name}>
                                  {element.cast_name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      )}
                      {/* <input
=======
                      {/* add select option for subcast
                       {<input
                        onChange={(e) => changeInputEvent(e)}
                        type="text"
                        name="subcaste"
                        value={enroll.subcaste}
                        className="form-control"
  />} */}
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

export default EnrollUser;
