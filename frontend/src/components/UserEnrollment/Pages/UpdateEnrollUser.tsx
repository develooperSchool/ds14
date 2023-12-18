import React, { useEffect, useState } from "react";
import { IEnroll, IEnrollCaste, IEnrollData } from "../Model/IEnroll";
import * as UserEnrollAction from "../../../Redux/UserEnrollRedux/userEnroll.action";
import * as UserEnrollReducer from "../../../Redux/UserEnrollRedux/userEnroll.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { castArray } from "../../User/CastArray";
import { obcArray } from "../../User/CasteArray1";
import { IUpdate, ICaste } from "../../User/Model/Iuser";
import DatePicker from "react-datepicker";
import { AppDispatch, RootState } from "../../User/Redux/store";

const UpdateEnrollUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  //Data from redux store

  const userEnrollReduxState: UserEnrollReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserEnrollReducer.userEnrollFeatureKey];
    }
  );

  const { userEnroll } = userEnrollReduxState;
  const { id } = useParams();
  const navi = useNavigate();

  const [localUser, setLocalUser] = useState<IEnrollData>({
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
    enroll_id: "",
  });
  useEffect(() => {
    if (id) {
      dataFromServer(id);
    }
  }, [id]);

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
    } else if (input === "ST") {
      array = castArray.ST.filter((elem: any) => {
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

  useEffect(() => {
    reflectDate();
  }, [startDate]);

  useEffect(() => {
    if (userEnroll && Object.keys(userEnroll).length > 0) {
      setLocalUser({
        ...localUser,
        enroll_id: userEnroll.enroll_id,
        first_name: userEnroll.first_name,
        last_name: userEnroll.last_name,
        email: userEnroll.email,
        contact: userEnroll.contact,
        address: userEnroll.address,
        qualification: userEnroll.qualification,
        passing_year: userEnroll.passing_year,
        dob: userEnroll.dob,
        gender: userEnroll.gender,
        caste_category: userEnroll.caste_category,
        subcaste: userEnroll.subcaste,
      });
    }
    if (userEnroll.dob && userEnroll.dob !== "") {
      let dateArray = String(userEnroll.dob).split("-");
      let date: Date = new Date(
        Number(dateArray[2]),
        Number(dateArray[1]) - 1,
        Number(dateArray[0])
      );

      setStartDate(date);
    }
  }, [userEnroll]);

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
    console.log("formattedDate=", formattedDate);
    setLocalUser({
      ...localUser,
      dob: formattedDate,
    });
  };
  const dataFromServer = (id: string) => {
    dispatch(UserEnrollAction.getEnrollUserAction({ id: id }));
  };
  const changeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setLocalUser({
      ...localUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (
    event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ): void => {
    event.preventDefault();
    let updateUserData: IEnroll = {
      firstName: localUser.first_name,
      lastName: localUser.last_name,
      email: localUser.email,
      contact: localUser.contact,
      address: localUser.address,
      qualification: localUser.qualification,
      passingYear: localUser.passing_year,
      dob: localUser.dob,
      gender: localUser.gender,
      casteCategory: localUser.caste_category,
      subcaste: localUser.subcaste,
    };
    console.log(updateUserData);
    dispatch(
      UserEnrollAction.updateEnrollUserAction({
        updateUserData,
        id,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        navi("/userEnrollData");
      }
    });
  };

  return (
    <>
      <pre>{JSON.stringify(id)}</pre>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="h3">Update user</p>
            <p className="fst-italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus vitae deleniti modi nesciunt illum voluptas ipsum
              distinctio, quos aliquam velit ipsa. Nobis quidem, error, libero
              quaerat sunt perspiciatis animi maiores similique debitis minus
              odio? Molestias voluptatum laborum beatae qui laboriosam nobis
              corrupti eveniet tempore quibusdam ipsum ducimus veniam
              consectetur, blanditiis minima modi distinctio temporibus aliquam
              dicta amet ullam suscipit neque.
            </p>
          </div>
        </div>
      </div>
      <div className="offset-lg-2 col-lg-8 mt-3">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Update User</h1>
            </div>
            <form onSubmit={(e) => submitData(e)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <input
                      type="hidden"
                      name="user_id"
                      value={localUser.enroll_id}
                    />
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="first_name"
                        value={localUser.first_name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="last_name"
                        value={localUser.last_name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        // onChange={(e) => changeInput(e)}
                        type="email"
                        name="email"
                        value={localUser.email}
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Contact</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="contact"
                        value={localUser.contact}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        name="address"
                        onChange={(e) => changeInput(e)}
                        value={localUser.address}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Qualification</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="qualification"
                        value={localUser.qualification}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Passing Year</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="number"
                        name="passing_year"
                        value={localUser.passing_year}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Date of Birth</label>
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
                        onChange={(e) => changeInput(e)}
                        type="radio"
                        name="gender"
                        value="male"
                      />
                      <label className="me-5">Male</label>
                      <input
                        onChange={(e) => changeInput(e)}
                        type="radio"
                        name="gender"
                        value="female"
                      />
                      <label>Female</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <label>Caste</label>
                      <select
                        name="caste_category"
                        id=""
                        className="form-select"
                        aria-label="Default select example"
                        value={localUser.caste_category}
                        onClick={() => {
                          castData(localUser.caste_category);
                        }}
                        onChange={(e) => changeInput(e)}
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
                      {localUser.caste_category != "OPEN" && (
                        <label>Subcaste</label>
                      )}
                      {localUser.caste_category != "OPEN" && (
                        <select
                          onChange={(e) => changeInput(e)}
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
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="subcaste"
                        value={localUser.subcaste}
                        className="form-control"
                      /> */}
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

export default UpdateEnrollUser;
