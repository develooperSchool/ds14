import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "./Redux/store";
import * as userAction from "../../Redux/UserRedux/user.action";
import * as userReducer from "../../Redux/UserRedux/user.reducer";
import { IRegisterData, IUpdate } from "./Model/Iuser";

const UpdateUser: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  //Data from redux store

  const userReduxState: userReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[userReducer.userFeatureKey];
    }
  );

  const { user } = userReduxState;
  const { id } = useParams();
  const navi = useNavigate();

  const [localUser, setLocalUser] = useState<IUpdate>({
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
    user_id: "",
  });
  useEffect(() => {
    if (id) {
      dataFromServer(id);
    }
  }, [id]);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setLocalUser({
        ...localUser,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        contact: user.contact,
        address: user.address,
        qualification: user.qualification,
        passing_year: user.passing_year,
        dob: user.dob,
        gender: user.gender,
        caste_category: user.caste_category,
        subcaste: user.subcaste,
      });
    }
  }, [user]);
  const dataFromServer = (id: string) => {
    dispatch(userAction.getUserAction({ id: id }));
  };
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocalUser({
      ...localUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let updateUserData: IUpdate = {
      first_name: localUser.first_name,
      last_name: localUser.last_name,
      email: localUser.email,
      contact: localUser.contact,
      address: localUser.address,
      qualification: localUser.qualification,
      passing_year: localUser.passing_year,
      dob: localUser.dob,
      gender: localUser.gender,
      caste_category: localUser.caste_category,
      subcaste: localUser.subcaste,
    };
    dispatch(
      userAction.updateUserAction({
        updateUserData,
        id,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        navi("/");
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
                        onChange={(e) => changeInput(e)}
                        type="email"
                        name="email"
                        value={localUser.email}
                        className="form-control"
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
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => changeInput(e)}
                        value={localUser.caste_category}
                        name="caste_category"
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
                        onChange={(e) => changeInput(e)}
                        type="text"
                        name="subcaste"
                        value={localUser.subcaste}
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

export default UpdateUser;
