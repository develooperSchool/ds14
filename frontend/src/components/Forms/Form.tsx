import React from "react";
import { IFormWrapper } from "../../utils/Model/IAuth";
import { Link } from "react-router-dom";

const Form: React.FC<IFormWrapper> = ({
  title,
  handleLogin,
  login,
  changeInputEvent,
}) => {
  return (
    <form
      className="p-3 bg-white"
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <h3 className="text-center">{title}</h3>
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
      <button type="submit" className="btn btn-success btn-block w-100">
        Login
      </button>
      <div className="mt-3 text-center">
        <span>New user? </span>
        <Link to={"/register"}>Register Here</Link>
      </div>
    </form>
  );
};

export default Form;
