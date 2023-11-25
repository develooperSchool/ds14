import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction";

const GetAllSalaryAnnexure: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    // Data from Redux Store
    const salaryAnnexureReduxState: SalaryAnnexureReducer.InitialState = useSelector(
        (state: RootState) => {
            return state[SalaryAnnexureReducer.salaryfeatureKey];
        }
    );

    useEffect(() => {
        fetchDataFromServer();
    }, []);

    const fetchDataFromServer = () => {
        dispatch(SalaryAnnexureAction.getAllSalaryAnnexureAction());
    };

    const deleteSalaryAnnexure = (annexureId: number) => {
        if (annexureId) {
            dispatch(SalaryAnnexureAction.deleteSalaryAnnexureAction({ Id: annexureId })).then(
                (res: any) => {
                    if (res && !res.error) {
                        fetchDataFromServer();
                    }
                }
            );
        }
    };

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <h3 className="text-success mt-3">Salary Annexure Details</h3>
                        <p className="fst-italic text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, ipsum? Asperiores totam tenetur minus officia sint perferendis quidem accusamus, iusto reiciendis a quos laudantium. Repellat eius porro qui amet voluptates odit. Consequatur, aliquam similique libero dolor dolorem totam eligendi! Quod dignissimos commodi blanditiis deleniti, magnam hic placeat ut illum. Expedita.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Link className="btn btn-primary" to="/create">+ NEW</Link>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-stripped table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Annexure Id</th>
                                    <th>User Id</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Department</th>
                                    <th>location</th>
                                    <th>Basic Salary</th>
                                    <th>HRA</th>
                                    <th>Allowance</th>
                                    <th>P.Tax</th>
                                    <th>Total Deduction</th>
                                    <th>Net Salary</th>
                                    <th>Annexure Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salaryAnnexureReduxState.salaries.map((annexure, index) => (
                                    <tr key={index}>
                                        <td>{annexure.annexure_id}</td>
                                        <td>{annexure.user_id}</td>
                                        <td>{annexure.name}</td>
                                        <td>{annexure.designation}</td>
                                        <td>{annexure.department}</td>
                                        <th>{annexure.job_location}</th>
                                        <th>{annexure.basic}</th>
                                        <th>{annexure.hra}</th>
                                        <th>{annexure.special_allowance}</th>
                                        <th>{annexure.profession_tax}</th>
                                        <th>{annexure.total_deductions}</th>
                                        <th>{annexure.net_salary}</th>
                                        <td>{annexure.annexure_date}</td>
                                        <td>
                                            <Link to={`/put/${annexure.annexure_id}`} className="btn btn-outline-success">
                                                Update
                                            </Link>
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => deleteSalaryAnnexure(annexure.annexure_id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetAllSalaryAnnexure;
