import React, { useEffect } from "react";
import * as AttendanceReducer from "../../../../Redux/AttendanceRedux/attendance.reducer"
import * as AttendanceAction from "../../../../Redux/AttendanceRedux/attendance.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { Link } from "react-router-dom";
import { usePagination } from "../../../Pagination";
import Pagination from "react-bootstrap/esm/Pagination";

const GetAllAttendance: React.FC = () => {

    //Data from Redux Store
    const attendanceReduxState: AttendanceReducer.InitialState = useSelector((state: RootState) => {
        return state[AttendanceReducer.attendanceFeatureKey]
    })

    const dispatch: AppDispatch = useDispatch();

    const { totalPages, startPageIndex, endPageIndex, currentPageIndex, displayPage } = usePagination({ perPageRecords: 5, totalPageRecords: attendanceReduxState.attendances.length });

    useEffect(() => {
        dataFromServer()
    }, [])

    const dataFromServer = () => {
        dispatch(AttendanceAction.getAllAttendanceAction())
    }

    const deleteAttendance = (Id: string) => {
        if (Id) {
            dispatch(AttendanceAction.deleteAttendanceAction({ Id: Id })).then((res: any) => {
                if (res && !res.error) {
                    dataFromServer()
                }
            })
        }

    }

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <h3 className="text-success mt-3">Attendance Details</h3>
                        <p className="fst-italic text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, ipsum? Asperiores totam tenetur minus officia sint perferendis quidem accusamus, iusto reiciendis a quos laudantium. Repellat eius porro qui amet voluptates odit. Consequatur, aliquam similique libero dolor dolorem totam eligendi! Quod dignissimos commodi blanditiis deleniti, magnam hic placeat ut illum. Expedita.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Link className="btn btn-primary" to="/postattendance">+ NEW</Link>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-secondary table-stripped table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Attendance Id</th>
                                    <th>User Id</th>
                                    <th>Attendance Date</th>
                                    <th>In Time</th>
                                    <th> Out Time</th>
                                    <th>Total Hrs Work</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceReduxState.attendances.slice(startPageIndex, endPageIndex + 1).map((newattend, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{newattend.attendance_id}</td>
                                            <td>{newattend.user_id}</td>
                                            <td>{newattend.attendance_date}</td>
                                            <td>{newattend.in_time}</td>
                                            <td>{newattend.out_time}</td>
                                            <td>{newattend.total_hours_work}</td>
                                            <td>
                                                <Link
                                                    to={`/updateattendance/${newattend.attendance_id}`}
                                                    className="btn btn-success"
                                                >
                                                    Update
                                                </Link>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        deleteAttendance(
                                                            String(newattend.attendance_id)
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
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
    );
};

export default GetAllAttendance;
