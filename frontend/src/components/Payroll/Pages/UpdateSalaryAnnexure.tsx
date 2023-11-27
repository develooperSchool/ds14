import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction"
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SalaryAnnexure, SalaryAnnexureUpdate } from "../Model/SalaryAnnexure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdateSalaryAnnexure: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [startDate, setStartDate] = useState<Date | null>(new Date());


    // Data from Redux Store
    const salaryAnnexureReduxState: SalaryAnnexureReducer.InitialState = useSelector(
        (state: RootState) => {
            return state[SalaryAnnexureReducer.salaryfeatureKey];
        }
    );

    const { salary } = salaryAnnexureReduxState;
    const { annexureId: Id } = useParams();
    const navi = useNavigate();

    const [localSalary, setlocalSalary] = useState<SalaryAnnexure>({
        annexure_id: 0,
        user_id: 0,
        name: "",
        designation: "",
        department: "",
        job_location: "",
        basic: 0,
        hra: 0,
        special_allowance: 0,
        profession_tax: 0,
        total_deductions: 0,
        net_salary: 0,
        annexure_date: "",
    });

    useEffect(() => {
        if (Id) {
            dataFromServer(Id);
        }
    }, [Id]);

    useEffect(() => {
        if (salary && Object.keys(salary).length > 0) {
            setlocalSalary({
                ...localSalary,
                annexure_id: salary.annexure_id,
                user_id: salary.user_id,
                name: salary.name,
                designation: salary.designation,
                department: salary.department,
                job_location: salary.job_location,
                basic: salary.basic,
                hra: salary.hra,
                special_allowance: salary.special_allowance,
                profession_tax: salary.profession_tax,
                total_deductions: salary.total_deductions,
                net_salary: salary.net_salary,
                annexure_date: salary.annexure_date,
            });

            if (salary.annexure_date && salary.annexure_date !== "") {
                let dateArray: any = salary.annexure_date.split("-");
                let date: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]))

                setStartDate(date)
            }
        }
    }, [salary]);

    useEffect(() => {
        reflectDate();
    }, [startDate])

    const changeDate = (date: Date | null) => {
        setStartDate(date);
    };

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
        setlocalSalary({
            ...localSalary,
            annexure_date: formattedDate,
        });

    }

    const dataFromServer = (Id: string) => {
        dispatch(SalaryAnnexureAction.getSalaryAnnexureAction({ Id: Id }));
    };

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        const updatedAnnexure: SalaryAnnexure = {
            ...localSalary,
            [name]: isNaN(parseFloat(value)) ? value : parseFloat(value),
        };

        if (name === "basic") {
            updatedAnnexure.hra = parseFloat(value) * 0.5;
        }
        if (name === "profession_tax") {
            updatedAnnexure.total_deductions = parseFloat(value);
        }
        updatedAnnexure.net_salary =
            Number(updatedAnnexure.basic) +
            Number(updatedAnnexure.hra) +
            Number(updatedAnnexure.special_allowance) -
            Number(updatedAnnexure.profession_tax);

        setlocalSalary(updatedAnnexure);
    };


    const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        let updatesalaryannexure: SalaryAnnexureUpdate = {
            user_id: localSalary.user_id,
            name: localSalary.name,
            designation: localSalary.designation,
            department: localSalary.department,
            job_location: localSalary.job_location,
            basic: localSalary.basic,
            hra: localSalary.hra,
            special_allowance: localSalary.special_allowance,
            profession_tax: localSalary.profession_tax,
            total_deductions: localSalary.total_deductions,
            net_salary: localSalary.net_salary,
            annexure_date: localSalary.annexure_date
        };
        dispatch(SalaryAnnexureAction.updateSalaryAnnexureAction({ updatesalaryannexure, Id })).then(
            (res: any) => {
                if (res && !res.error) {
                    navi('/payroll');
                }
            }
        );
    };

    return (
        <>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Update Salary</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit labore mollitia.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={(e) => submitData(e)} className="mt-2">
                <div className="mb-2">
                    <label className="form-label">User Id</label>
                    <input
                        type="number"
                        onChange={(e) => changeInputEvent(e)}
                        name="user_id"
                        value={localSalary.user_id}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        onChange={(e) => changeInputEvent(e)}
                        name="name"
                        value={localSalary.name}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        onChange={(e) => changeInputEvent(e)}
                        name="designation"
                        value={localSalary.designation}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Department</label>
                    <input
                        type="text"
                        onChange={(e) => changeInputEvent(e)}
                        name="department"
                        value={localSalary.department}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Job Location</label>
                    <input
                        type="text"
                        onChange={(e) => changeInputEvent(e)}
                        name="job_location"
                        value={localSalary.job_location}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Basic Salary</label>
                    <input
                        type="number"
                        step="0.01"
                        onChange={(e) => changeInputEvent(e)}
                        name="basic"
                        value={localSalary.basic}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Special Allowance</label>
                    <input
                        type="number"
                        step="0.01"
                        onChange={(e) => changeInputEvent(e)}
                        name="special_allowance"
                        value={localSalary.special_allowance}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Profession Tax</label>
                    <input
                        type="number"
                        step="0.01"
                        onChange={(e) => changeInputEvent(e)}
                        name="profession_tax"
                        value={localSalary.profession_tax}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">HRA</label>
                    <input
                        type="number"
                        step="0.01"
                        onChange={(e) => changeInputEvent(e)}
                        name="hra"
                        value={localSalary.hra}
                        className="form-control"
                        disabled
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Net Salary</label>
                    <input
                        type="number"
                        step="0.01"
                        onChange={(e) => changeInputEvent(e)}
                        name="net_salary"
                        value={localSalary.net_salary}
                        className="form-control"
                        disabled
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Annexure Date</label>
                    {/* <input
                        type="date"
                        onChange={(e) => changeInputEvent(e)}
                        name="annexure_date"
                        value={localSalary.annexure_date}
                        className="form-control"
                    /> */}
                    <DatePicker
                        dateFormat="dd-MM-yyyy"
                        selected={startDate}
                        onChange={(date) => changeDate(date)}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <button type="submit" className="btn btn-success">
                        UPDATE
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => navi("/payroll")}
                    >
                        CANCEL
                    </button>
                </div>
            </form>

        </>
    )
}

export default UpdateSalaryAnnexure;
