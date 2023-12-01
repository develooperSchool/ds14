import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import * as PayrollProcessingAction from "../../../Redux/PayrollProcessingRedux/payrollprocessing.action"
import * as PayrollProcessingReducer from "../../../Redux/PayrollProcessingRedux/payrollprocessing.reducer"
import { useSelector } from "react-redux";
import { usePagination } from "../../Pagination";
import { Pagination } from "react-bootstrap";


const GetAllPayrollProcessing: React.FC = () => {

    //Data from Redux Store
    const processingReduxState: PayrollProcessingReducer.InitialState = useSelector((state: RootState) => {
        return state[PayrollProcessingReducer.processingFeatureKey]
    })

    const [search, setSearch] = useState("");

    const searchItem = processingReduxState.processes.filter((item) => {
        if (search == "") {
            return item;
        } else if (
            item.payroll_date.toLowerCase().includes(search.toLowerCase()) ||
            String(item.payroll_id).includes(search)
        ) {
            return item;
        }
    });

    const dispatch: AppDispatch = useDispatch();
    const { totalPages, startPageIndex, endPageIndex, currentPageIndex, displayPage } = usePagination({ perPageRecords: 5, totalPageRecords: processingReduxState.processes.length });

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
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-primary" to="/postpayroll-processing">+ NEW</Link>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="form-control"
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                </div>

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
                                {(searchItem.length > 0 ? searchItem : processingReduxState.processes).slice(startPageIndex, endPageIndex + 1).map((newprocess, index) => {
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
                        <Pagination>
                            <Pagination.First onClick={() => displayPage(1)} />
                            <Pagination.Prev onClick={() => displayPage(currentPageIndex - 1)} disabled={currentPageIndex === 1} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPageIndex}
                                    onClick={() => displayPage(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => displayPage(currentPageIndex + 1)} disabled={currentPageIndex === totalPages} />
                            <Pagination.Last onClick={() => displayPage(totalPages)} />
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetAllPayrollProcessing;
