import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as AttendanceAction from "../../../../Redux/AttendanceRedux/attendance.action";
import { IAttendance } from "../../Model/IAttendance";

const PostAttendance = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

    const [localattendance, setlocalattendance] = useState<IAttendance>({
        user_id: 0,
        attendance_date: "",
        in_time: "",
        out_time: "",
        total_hours_work: ""
    });

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlocalattendance({
            ...localattendance,
            [event.target.name]: event.target.value
        })
    }

    const formattedDate = (date: Date | string | null): string => {
        if (date === null) {
            throw new Error("Date cannot be null");
        }

        const dateObject = typeof date === 'string' ? new Date(date) : date;

        const yyyy = dateObject.getFullYear();
        const mm = String(dateObject.getMonth() + 1).padStart(2, '0');
        const dd = String(dateObject.getDate()).padStart(2, '0');

        return `${yyyy}-${mm}-${dd}`;
    };

    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const formattedAttendanceDate = formattedDate(localattendance.attendance_date);

            const updatedAttendance = { ...localattendance, attendance_date: formattedAttendanceDate };
            dispatch(AttendanceAction.createAttendanceAction({ body: updatedAttendance })).then((res: any) => {
                if (res && !res.error) {
                    Navi('/attendance');
                }
            });
        } catch (error) {
            throw error;
        }
    };


    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Create Attendance</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit labore mollitia.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card p-3">
                            <div className="card-header bg-warning">
                                <h4>Create Attendance</h4>
                            </div>
                            <form onSubmit={(e) => submitData(e)} className="mt-2">
                                <div className="mb-2">
                                    <label className="form-label">User Id</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="user_id" value={localattendance.user_id} className="form-control" placeholder="enter user id" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Attendance Date</label>
                                    <input
                                        type="date"
                                        onChange={(e) => changeInputEvent(e)}
                                        name="attendance_date"
                                        value={localattendance.attendance_date ? formattedDate(localattendance.attendance_date) : ""}
                                        className="form-control"
                                        placeholder="enter date"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">In Time</label>
                                    <input type="time" onChange={(e) => changeInputEvent(e)} name="in_time" value={localattendance.in_time} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Out Time</label>
                                    <input type="time" onChange={(e) => changeInputEvent(e)} name="out_time" value={localattendance.out_time} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Total Hrs Work</label>
                                    <input type="time" onChange={(e) => changeInputEvent(e)} name="total_hours_work" value={localattendance.total_hours_work} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                    <button type="reset" className="btn btn-warning">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostAttendance;
