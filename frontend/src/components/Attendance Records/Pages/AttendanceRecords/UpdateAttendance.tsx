import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as AttendanceReducer from "../../../../Redux/AttendanceRedux/attendance.reducer";
import * as AttendanceAction from "../../../../Redux/AttendanceRedux/attendance.action";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { IAttendance } from "../../Model/IAttendance";

const UpdateAttendance: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const attendanceReduxState: AttendanceReducer.InitialState = useSelector((state: RootState) => {
        return state[AttendanceReducer.attendanceFeatureKey];
    });

    const { attendance } = attendanceReduxState;

    const { Id } = useParams();
    const navi = useNavigate();

    const [localAttendance, setLocalAttendance] = useState<IAttendance>({
        user_id: 0,
        attendance_date: "",
        in_time: "",
        out_time: "",
        total_hours_work: "",
    });

    useEffect(() => {
        if (Id) {
            dataFromServer(Id);
        }
    }, [Id]);

    useEffect(() => {
        console.log("Fetched Attendance:", attendance);
        if (attendance && Object.keys(attendance).length > 0) {
            setLocalAttendance({
                user_id: attendance.user_id,
                attendance_date: attendance.attendance_date,
                in_time: attendance.in_time,
                out_time: attendance.out_time,
                total_hours_work: attendance.total_hours_work,
            });
        }
    }, [attendance]);

    const dataFromServer = (Id: string) => {
        dispatch(AttendanceAction.getAttendanceAction({ Id: Id }));
    };

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLocalAttendance({
            ...localAttendance,
            [event.target.name]: event.target.value,
        });
    };

    const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(AttendanceAction.updateAttendanceAction({ updateAttendance: localAttendance, Id: Id })).then(
            (res: any) => {
                if (res && !res.error) {
                    navi('/hr');
                }
            }
        );
    };

    return (
        <>
            <pre>{JSON.stringify(localAttendance)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Update Salary</p>
                        <p className="fst-italic">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos
                            quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis
                            quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem
                            dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit
                            labore mollitia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card p-3">
                            <div className="card-header bg-warning">
                                <h4>Update Salary</h4>
                            </div>
                            <form onSubmit={(e) => submitData(e)} className="mt-2">
                                <div className="mb-2">
                                    <label className="form-label">User Id</label>
                                    <input
                                        type="number"
                                        onChange={(e) => changeInput(e)}
                                        name="user_id"
                                        value={attendance.user_id}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Attendance Date</label>
                                    <input
                                        type="date"
                                        onChange={(e) => changeInput(e)}
                                        name="attendance_date"
                                        value={attendance.attendance_date || ""}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">In Time</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        onChange={(e) => changeInput(e)}
                                        name="in_time"
                                        value={attendance.in_time}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Out Time</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        onChange={(e) => changeInput(e)}
                                        name="out_time"
                                        value={attendance.out_time}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Total Hrs Work</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        onChange={(e) => changeInput(e)}
                                        name="total_hours_work"
                                        value={attendance.total_hours_work}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success">
                                        UPDATE
                                    </button>
                                    <button className="btn btn-warning">CANCEL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateAttendance;
