import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SalaryAnnexure } from "../Model/SalaryAnnexure"; // Update with your actual path
import { useNavigate } from "react-router-dom";
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction";

const CreateSalaryAnnexure = () => {
    const dispatch = useDispatch();
    const Navi = useNavigate();

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

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;


        const updatedAnnexure: SalaryAnnexure = { ...salaryAnnexure, [name]: isNaN(parseFloat(value)) ? value : parseFloat(value) };

        if (name === "basic") {
            updatedAnnexure.hra = parseFloat(value) * 0.5;
        }
        if (name === "profession_tax") {
            updatedAnnexure.total_deductions = parseFloat(value);
        }

        updatedAnnexure.net_salary =
            updatedAnnexure.basic +
            updatedAnnexure.hra +
            updatedAnnexure.special_allowance -
            updatedAnnexure.profession_tax;


        setSalaryAnnexure(updatedAnnexure);
    };



    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        dispatch(SalaryAnnexureAction.postSalaryAnnexureAction({ body: salaryAnnexure }))
            .then((res: { error: any }) => {
                if (res && !res.error) {
                    Navi("/payroll");
                    console.log("Salary annexure created successfully.");
                }
            });
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
                                <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="profession_tax" value={salaryAnnexure.profession_tax} className="form-control" />
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
                                <input type="date" name="annexure_date" onChange={(e) => changeInputEvent(e)} pattern="\d{4}-\d{2}-\d{2}" value={salaryAnnexure.annexure_date} className="form-control" />
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
