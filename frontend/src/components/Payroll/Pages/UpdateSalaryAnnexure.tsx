import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as SalaryAnnexureAction from "../../../Redux/PayrollRedux/salaryAction"
import * as SalaryAnnexureReducer from "../../../Redux/PayrollRedux/salaryReducer"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SalaryAnnexure } from "../Model/SalaryAnnexure";


const UpdateSalaryAnnexure: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()

    //Data from Redux Store
    const salaryAnnexureReduxState: SalaryAnnexureReducer.InitialState = useSelector(
        (state: RootState) => {
            return state[SalaryAnnexureReducer.payrollFeatureKey];
        }
    );
    const { payroll } = salaryAnnexureReduxState


    const { Id } = useParams()
    const navi = useNavigate()

    const [localpayroll, setlocalpayroll] = useState<SalaryAnnexure>(
        {
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
        }
    )

    useEffect(() => {
        if (Id) {
            dataFromServer(Id)
        }
    }, [Id])

    useEffect(() => {
        if (payroll && Object.keys(payroll).length > 0) {
            setlocalpayroll({
                ...localpayroll,
                annexure_id: payroll.annexure_id,
                user_id: payroll.user_id,
                name: payroll.name,
                designation: payroll.designation,
                department: payroll.department,
                job_location: payroll.job_location,
                basic: payroll.basic,
                hra: payroll.hra,
                special_allowance: payroll.special_allowance,
                profession_tax: payroll.profession_tax,
                total_deductions: payroll.total_deductions,
                net_salary: payroll.net_salary,
                annexure_date: payroll.annexure_date,
            })
        }
    }, [payroll])


    const dataFromServer = (Id: string) => {
        dispatch(SalaryAnnexureAction.getSalaryAnnexureAction({ Id: Id }))
    }



    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setlocalpayroll({
            ...localpayroll,
            [event.target.name]: event.target.value
        })
    }

    const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(SalaryAnnexureAction.updateSalaryAnnexureAction({ updatesalaryannexure: localpayroll, Id: Id })).then((res: any) => {
            if (res && !res.error) {
                navi('/payroll')
            }
        })
    }


    return (
        <>
            <pre>{JSON.stringify(localpayroll)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Update Salary</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit labore mollitia.</p>
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
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        onChange={(e) => changeInputEvent(e)}
                                        name="name"
                                        value={localpayroll.name}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Designation</label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Department</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="department" value={localpayroll.department} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Job Location</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="job_location" value={localpayroll.job_location} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Basic Salary</label>
                                    <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="basic" value={localpayroll.basic} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Special Allowance</label>
                                    <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="special_allowance" value={localpayroll.special_allowance} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Profession Tax</label>
                                    <input type="number" step="0.01" onChange={(e) => changeInputEvent(e)} name="profession_tax" value={localpayroll.profession_tax} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">HRA</label>
                                    <input type="number" step="0.01" name="hra" value={localpayroll.hra} className="form-control" disabled />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Net Salary</label>
                                    <input type="number" step="0.01" name="net_salary" value={localpayroll.net_salary} className="form-control" disabled />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Annexure Date</label>
                                    <input type="date" name="annexure_date" onChange={(e) => changeInputEvent(e)} value={localpayroll.annexure_date} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success">UPDATE</button>
                                    <button className="btn btn-warning">CANCEL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdateSalaryAnnexure;
