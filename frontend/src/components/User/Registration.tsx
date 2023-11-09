import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "./Redux/store";
import { Iregister } from "./Model/Iuser";
import * as UserAction from "../../Redux/UserRedux/user.action";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";

const Registration: React.FC = () => {
  const Navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //Data from redux store

  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  const [create, setCreate] = useState<Iregister>({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
    qualification: "",
    passing_year: 0,
    dob: "",
    gender: "",
    caste: "",
    subcaste: "",
    password: "",
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(create);
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(UserAction.createUserAction({ user: create }))
      .then((res: any) => {
        if (res && !res.data) {
          // Navigate("/");
          alert("Done");
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
                        name="firstName"
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
                        name="lastName"
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
                        name="passingYear"
                        value={create.passing_year}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="Date"
                        name="dob"
                        value={create.dob}
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
                        value={create.gender}
                      />
                      <label className="me-5">Male</label>
                      <input
                        onChange={(e) => changeInputEvent(e)}
                        type="radio"
                        name="gender"
                        value={create.gender}
                      />
                      <label>Female</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Caste</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => changeInputEvent(e)}
                        value={create.caste}
                        name="caste"
                      />
                      {/* <select name="caste" id="" className="form-control">
                                        <option value="select">Select</option>
                                        <option value="open">OPEN</option>
                                        <option value="obc">OBC</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                        <option value="vjnt">VJNT</option>
                                        <option value="other">OTHER</option>
                                    </select> */}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
