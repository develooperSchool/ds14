import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as AttendanceReducer from "../../../../Redux/AttendanceRedux/attendance.reducer";
import * as AttendanceAction from "../../../../Redux/AttendanceRedux/attendance.action";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { IAttendance, IUpdateAttendance } from "../../Model/IAttendance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateAttendance: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [inTime, setInTime] = useState<Date | null>(new Date());
    const [outTime, setOutTime] = useState<Date | null>(new Date());


    const attendanceReduxState: AttendanceReducer.InitialState = useSelector((state: RootState) => {
        return state[AttendanceReducer.attendanceFeatureKey];
    });

    const { attendance } = attendanceReduxState;
    const { attendance_id: Id } = useParams();
    const navi = useNavigate();

    const [localAttendance, setLocalAttendance] = useState<IAttendance>({
        attendance_id: 0,
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
        if (attendance && Object.keys(attendance).length > 0) {
            setLocalAttendance({
                ...localAttendance,
                attendance_id: attendance.attendance_id,
                user_id: attendance.user_id,
                attendance_date: attendance.attendance_date,
                in_time: attendance.in_time,
                out_time: attendance.out_time,
                total_hours_work: attendance.total_hours_work,
            });

            let dateArray: any = attendance.attendance_date.split("-");
            let date: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]))

            setStartDate(date)

            // Time:
            let inTimeArray: any = attendance.in_time.split(":");
            let dateInTime: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]), Number(inTimeArray[0]), Number(inTimeArray[1]), Number(inTimeArray[2]))
            setInTime(dateInTime)

            let outTimeArray: any = attendance.out_time.split(":");
            let dateOutTime: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]), Number(outTimeArray[0]), Number(outTimeArray[1]), Number(outTimeArray[2]))
            setOutTime(dateOutTime);
        }
    }, [attendance]);

    useEffect(() => {
        reflectDate();
    }, [startDate])

    const changeDate = (date: Date | null) => {
        setStartDate(date);
    };

    const changeTime = (date: Date | null) => {
        setInTime(date);
    }

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
        console.log("formattedDate=", formattedDate)
        setLocalAttendance({
            ...localAttendance,
            attendance_date: formattedDate,
        });

    }


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
        let updateAttendance: IUpdateAttendance = {
            user_id: localAttendance.user_id,
            attendance_date: localAttendance.attendance_date,
            in_time: localAttendance.in_time,
            out_time: localAttendance.out_time,
            total_hours_work: localAttendance.total_hours_work,
        };
        dispatch(AttendanceAction.updateAttendanceAction({ updateAttendance, Id })).then(
            (res: any) => {
                if (res && !res.error) {
                    navi('/attendance');
                }
            }
        );
    };

    return (
        <>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Update Attendance</p>
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
                                <h4>Update Attendance</h4>
                            </div>
                            <form onSubmit={(e) => submitData(e)} className="mt-2">
                                <div className="mb-2">
                                    <label className="form-label">User Id</label>
                                    <input
                                        type="number"
                                        onChange={(e) => changeInput(e)}
                                        name="user_id"
                                        value={localAttendance.user_id}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Attendance Date</label>
                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        selected={startDate}
                                        onChange={(date) => changeDate(date)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">In Time</label>
                                    <DatePicker
                                        selected={inTime}
                                        onChange={(date: Date) => changeTime(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm:ss"
                                        timeIntervals={15}
                                        dateFormat="h:mm:ss"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Out Time</label>
                                    <DatePicker
                                        selected={outTime}
                                        onChange={(date: Date) => changeTime(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm:ss"
                                        timeIntervals={15}
                                        dateFormat="h:mm:ss"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Total Hrs Work</label>
                                    <input
                                        type="text"
                                        onChange={(e) => changeInput(e)}
                                        name="total_hours_work"
                                        value={localAttendance.total_hours_work}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success">
                                        UPDATE
                                    </button>
                                    <Link
                                        to={`/attendance`}
                                        className="btn btn-warning"
                                    >
                                        CANCEL
                                    </Link>
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
