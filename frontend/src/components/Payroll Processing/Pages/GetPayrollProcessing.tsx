import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import * as PayrollProcessingAction from "../../../Redux/PayrollProcessingRedux/payrollprocessing.action"
import * as PayrollProcessingReducer from "../../../Redux/PayrollProcessingRedux/payrollprocessing.reducer"
import { useSelector } from "react-redux";


const GetAllPayrollProcessing: React.FC = () => {

    //Data from Redux Store
    const processingReduxState: PayrollProcessingReducer.InitialState = useSelector((state: RootState) => {
        return state[PayrollProcessingReducer.processingFeatureKey]
    })

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dataFromServer()
    }, [])

    const dataFromServer = () => {
        dispatch(PayrollProcessingAction.getAllProcessingAction())
    }

    const deletePayrollProcessing = (Id: string) => {
        if (Id) {
            dispatch(PayrollProcessingAction.deleteProcessingAction({ Id: Id })).then((res: any) => {
                if (res && !res.error) {
                    dataFromServer()
                }
            })
        }

    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Payroll-Processing Details</p>
                        <p className="fst-itilic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque tempore unde provident nostrum eligendi amet, ipsum harum esse veritatis blanditiis accusamus dolor! Molestias dignissimos aperiam nulla voluptates in repudiandae quisquam quod culpa atque? Saepe provident laborum ex aliquam laudantium deleniti, accusamus dolorum architecto rerum, temporibus explicabo quo ea porro debitis?</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Link className="btn btn-primary" to="/postpayroll-processing">+ NEW</Link>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <table className="table table-secondary table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Payroll Id</th>
                                    <th>User Id</th>
                                    <th>Payroll Date</th>
                                    <th>GRoss Salary</th>
                                    <th>Net Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    processingReduxState.processes.map((newprocess, index) => {
                                        return (
                                            <tr>
                                                <td>{newprocess.payroll_id}</td>
                                                <td>{newprocess.user_id}</td>
                                                <td>{newprocess.payroll_date}</td>
                                                <td>{newprocess.gross_salary}</td>
                                                <td>{newprocess.net_salary}</td>
                                                <td>
                                                    <Link to={`/updatepayroll-processing/${newprocess.payroll_id}`} className="btn btn-primary">
                                                        UPDATE
                                                    </Link>
                                                    <button className="btn btn-warning" onClick={() => deletePayrollProcessing(String(newprocess.payroll_id))}>DELETE</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetAllPayrollProcessing;
