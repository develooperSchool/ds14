import React, { useEffect, useState } from "react";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import * as UserAction from "../../Redux/UserRedux/user.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "./Model/Iuser";

const Login: React.FC = () => {
  const Navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  //Data from redux store

  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  const [login, setlogin] = useState<IUser>({
    email: "",
    password: "",
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const submitLoginData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    dispatch(UserAction.userLoginAction({ user: login })).then((res: any) => {
      if (res && !res.data) {
        localStorage.setItem("userData", JSON.stringify(res.payload));
        Navigate("/");
      }
    });
    
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-5 offset-md-3">
            <form
              className="p-3 bg-secondary"
              onSubmit={(e) => {
                submitLoginData(e);
              }}
            >
              <h3 className="text-center">Login Form</h3>
              <div className="mb-3">
                <label>Email</label>
                <input
                  onChange={(e) => {
                    changeInputEvent(e);
                  }}
                  type="email"
                  name="email"
                  value={login.email}
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>
              <div className="mb-1">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    changeInputEvent(e);
                  }}
                  name="password"
                  value={login.password}
                  placeholder="Enter Password"
                  className="form-control"
                />
              </div>
              <div className="mb-3 ">
                <Link to={"/forgot"}>Forgot Password</Link>
              </div>
              <button type="submit" className="btn btn-success btn-block w-100">Login</button>
              <div className="mt-3 text-center">
                <span>New user? </span>
                <Link to={"/register"}>Register Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
