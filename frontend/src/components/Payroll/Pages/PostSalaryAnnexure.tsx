import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SalaryAnnexure } from "../Model/SalaryAnnexure";
import { useNavigate } from "react-router-dom";
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateSalaryAnnexure = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const [salaryAnnexure, setSalaryAnnexure] = useState<SalaryAnnexure>({
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
        reflectDate();
    }, [startDate]);

    const changeDate = (date: Date | null) => {
        setStartDate(date);
    };

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const updatedAnnexure: SalaryAnnexure = {
            ...salaryAnnexure,
            [name]: isNaN(parseFloat(value)) ? value : parseFloat(value),
        };

        if (name === "basic") {
            updatedAnnexure.hra = parseFloat(value) * 0.5;
        }
        if (name === "profession_tax") {
            updatedAnnexure.total_deductions = parseFloat(value);
        }

        updatedAnnexure.profession_tax = 200;

        updatedAnnexure.total_deductions =
            updatedAnnexure.profession_tax;

        updatedAnnexure.net_salary =
            updatedAnnexure.basic +
            updatedAnnexure.hra +
            updatedAnnexure.special_allowance -
            updatedAnnexure.profession_tax;

        setSalaryAnnexure(updatedAnnexure);
    };

    const reflectDate = () => {
        let day = startDate?.getDate();
        let month: string | number = startDate?.getMonth() != undefined ? startDate?.getMonth() + 1 : "";
        let year = startDate?.getFullYear();
        let fullDay: string | number = "";
        let fullMonth: string | number = "";
        if (day != undefined && month != undefined) {
            fullDay = day?.toString().length < 2 ? `0${day}` : day;
            fullMonth = month?.toString().length < 2 ? `0${month}` : month;
        }
        const formattedDate = `${fullDay}-${fullMonth}-${year}`;
        setSalaryAnnexure({
            ...salaryAnnexure,
            annexure_date: formattedDate,
        });
    };

    const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        reflectDate();
        console.log("Updated annexure_date:", salaryAnnexure.annexure_date);

        const data: SalaryAnnexure = {
            annexure_id: salaryAnnexure.annexure_id,
            user_id: salaryAnnexure.user_id,
            name: salaryAnnexure.name,
            designation: salaryAnnexure.designation,
            department: salaryAnnexure.department,
            job_location: salaryAnnexure.job_location,
            basic: salaryAnnexure.basic,
            hra: salaryAnnexure.hra,
            special_allowance: salaryAnnexure.special_allowance,
            profession_tax: salaryAnnexure.profession_tax,
            total_deductions: salaryAnnexure.total_deductions,
            net_salary: salaryAnnexure.net_salary,
            annexure_date: salaryAnnexure.annexure_date,
        };

        try {
            const res = await dispatch(SalaryAnnexureAction.postSalaryAnnexureAction({ body: data }));

            if (res && !res.data) {
                Navi("/payroll");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Create Salary Annexure</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos
                        iusto velit adipisci eveniet, accusamus nam a dignissimos
                        obcaecati, officiis enim? Consequatur consequuntur reiciendis quaerat
                        praesentium quas vero iure quidem earum quisquam modi autem quasi
                        minima, sed excepturi blanditiis! Adipisci porro illum libero
                        suscipit aperiam cumque odio, voluptatem praesentium dicta!
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-6">
                    <div className="card p-3">
                        <div className="card-header bg-warning">
                            <h4>Create Salary Annexure</h4>
                        </div>
                        <form onSubmit={(e) => submitData(e)} className="mt-2">
                            <div className="mb-2">
                                <label className="form-label">User Id</label>
                                <input
                                    type="number"
                                    onChange={(e) => changeInputEvent(e)}
                                    name="user_id"
                                    value={salaryAnnexure.user_id}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => changeInputEvent(e)}
                                    name="name"
                                    value={salaryAnnexure.name}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Designation</label>
                                <input type="text" onChange={(e) => changeInputEvent(e)} name="designation" value={salaryAnnexure.designation} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Department</label>
                                <input type="text" onChange={(e) => changeInputEvent(e)} name="department" value={salaryAnnexure.department} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Job Location</label>
                                <input type="text" onChange={(e) => changeInputEvent(e)} name="job_location" value={salaryAnnexure.job_location} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Basic Salary</label>
                                <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="basic" value={salaryAnnexure.basic} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Special Allowance</label>
                                <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="special_allowance" value={salaryAnnexure.special_allowance} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Profession Tax</label>
                                <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="profession_tax" value={200} className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">HRA</label>
                                <input type="number" step="0.01" name="hra" value={salaryAnnexure.hra} className="form-control" disabled />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Net Salary</label>
                                <input type="number" step="0.01" name="net_salary" value={salaryAnnexure.net_salary} className="form-control" disabled />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Annexure Date</label>
                                <DatePicker
                                    dateFormat="dd-MM-yyyy"
                                    selected={startDate}
                                    onChange={(date) => changeDate(date)}
                                    className="form-control"
                                />
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
    );
};

export default CreateSalaryAnnexure;
