import React from "react";
import { Link } from "react-router-dom";

const Login =()=>{
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row"> 
                <div className="col-lg-5 offset-md-3">
                <form action="" className="p-3 bg-secondary">
                    <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"/>
                    </div>
                    <div className="mb-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"/>
                    </div>
                    <div className="mb-3 ">
                    <Link  to={"/forgot"}>Forgot Password</Link>
                    </div>
                    <button className="btn btn-success btn-block w-100">Login</button>
                    
                 
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