import React, { useEffect } from "react";
import * as UserReducer from "../../components/User/Redux/UserRedux/user.reducer";
import * as UserAction from "./Redux/UserRedux/user.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
import { Link } from "react-router-dom";

const Login =()=>{
    const userReduxState: UserReducer.InitialState = useSelector(
        (state: RootState) => {
          return state[UserReducer.userFeatureKey];
        }
      );
      const dispatach: AppDispatch = useDispatch();
    
      useEffect(() => {
        dataFromserver();
      }, []);
    
      const dataFromserver = () => {
        dispatach(UserAction.userLoginAction());
      };
    return(
        
        <>
        <div className="container-fluid mt-5">
            <div className="row"> 
                <div className="col-lg-5 offset-md-3">
                <form className="p-3 bg-secondary">
                    <h3 className="text-center">Login Form</h3>
                    <div className="mb-3">
                    <label >Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"/>
                    </div>
                    <div className="mb-1">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"/>
                    </div>
                    <div className="mb-3 ">
                    <Link  to={"/forgot"}>Forgot Password</Link>
                    </div>
                    <button className="btn btn-success btn-block w-100">Login</button>
                    <div className="mt-3 text-center">
                        <span>New user?  </span>
                    <Link  to={"/register"}>Register Here</Link>
                    </div>
                    
                 
                </form>
                </div>
            </div>
        </div>
        {/* <div className="d-flex vh-100 justify-content-center align-items-center ">
            <div className="p-3 bg-white w-25">
                <form action="">
                    <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
      */}
        </>
    )
}

export default Login