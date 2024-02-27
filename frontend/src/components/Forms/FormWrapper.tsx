import React from "react";
import { Link } from "react-router-dom";
import { IFormWrapper } from "../../utils/Model/IAuth";

interface Props {
  children: React.ReactNode;
}

const FormWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="card card-shadow col-lg-5 col-md-6 offset-md-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
