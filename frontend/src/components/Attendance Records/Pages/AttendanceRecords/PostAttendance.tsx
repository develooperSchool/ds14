import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as AttendanceAction from "../../../../Redux/AttendanceRedux/attendance.action";
import { IAttendance } from "../../Model/IAttendance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostAttendance = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const [localattendance, setlocalattendance] = useState<IAttendance>({
        user_id: 0,
        attendance_date: "",
        in_time: "",
        out_time: "",
        total_hours_work: ""
    });

    useEffect(() => {
        reflectDate();
    }, [startDate]);

    const changeDate = (date: Date) => {
        setStartDate(date);
    };

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlocalattendance({
            ...localattendance,
            [event.target.name]: event.target.value
        });
    };

    const calculateTotalHoursWorked = () => {
        const { in_time, out_time } = localattendance;

        if (in_time && out_time) {
            const inTime = new Date(`2000-01-01T${in_time}`);
            const outTime = new Date(`2000-01-01T${out_time}`);

            const timeDiffInHours = (outTime.getTime() - inTime.getTime()) / (1000 * 60 * 60);

            const formattedHours = timeDiffInHours.toFixed(2);

            setlocalattendance({
                ...localattendance,
                total_hours_work: formattedHours
            });
        }
    };



    useEffect(() => {
        calculateTotalHoursWorked();
    }, [localattendance.in_time, localattendance.out_time]);

    const reflectDate = () => {
        let day = startDate?.getDate();
        let month: string | number =
            startDate?.getMonth() != undefined ? startDate?.getMonth() + 1 : "";
        let year = startDate?.getFullYear();

        let fullDay: string | number = "";
        let fullMonth: string | number = "";
        if (day != undefined && month != undefined) {
            fullDay = day?.toString().length < 2 ? `0${day}` : day;
            fullMonth = month?.toString().length < 2 ? `0${month}` : month;
        }
        const formattedDate = `${fullDay}-${fullMonth}-${year}`;
        setlocalattendance({
            ...localattendance,
            attendance_date: formattedDate,
        });
    };

    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: IAttendance = {
            user_id: localattendance.user_id,
            attendance_date: localattendance.attendance_date,
            in_time: localattendance.in_time,
            out_time: localattendance.out_time,
            total_hours_work: localattendance.total_hours_work
        };

        dispatch(AttendanceAction.createAttendanceAction({ body: data }))
            .then((res: any) => {
                if (res && !res.data) {
                    Navi("/attendance");
                }
            })
            .catch((error: any) => console.log("error"));
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
                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        selected={startDate}
                                        onChange={(date: Date) => changeDate(date)}
                                        className="form-control"
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
                                    <input type="text" name="total_hours_work" value={localattendance.total_hours_work} className="form-control" readOnly />
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
    );
}

export default PostAttendance;
