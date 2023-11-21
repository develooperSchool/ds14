import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import * as PayrollProcessingAction from "../../../Redux/PayrollProcessingRedux/payrollprocessing.action"
import * as PayrollProcessingReducer from "../../../Redux/PayrollProcessingRedux/payrollprocessing.reducer"
import { IProcessing } from "../Model/IProcessing";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostPayrollProcessing = () => {

    const Navigate = useNavigate();

    const dispatch: AppDispatch = useDispatch()

    //Data from Redux Store
    const processingReduxState: PayrollProcessingReducer.InitialState = useSelector((state: RootState) => {
        return state[PayrollProcessingReducer.processingFeatureKey]
    })

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const [localprocess, setlocalprocess] = useState<IProcessing>(
        {
            user_id: 0,
            payroll_date: "",
            gross_salary: 0,
            net_salary: 0
        }
    )

    useEffect(() => {
        reflectDate();
    }, [startDate])


    const changeDate = (date: Date) => {
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

        setlocalprocess({
            ...localprocess,
            payroll_date: formattedDate,
        });

    }

    const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlocalprocess({
            ...localprocess,
            [event.target.name]: event.target.value
        })
    }

    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(PayrollProcessingAction.createProcessingAction({ body: localprocess })).then((res: any) => {
            if (res && !res.error) {
                Navigate('/payroll-processing')
            }
        })
    }



    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Create Payroll-Processing</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit labore mollitia.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card p-3">
                            <div className="card-header bg-warning">
                                <h4>Create Payroll-Processing</h4>
                            </div>
                            <form onSubmit={(e) => submitData(e)} className="mt-2">
                                <div className="mb-2">
                                    <label className="form-label">User Id</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="user_id" value={localprocess.user_id} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Payroll Date</label>
                                    {/* <input type="date" onChange={(e) => changeInputEvent(e)} name="payroll_date" value={localprocess.payroll_date} className="form-control" /> */}
                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        selected={startDate}
                                        onChange={(date: Date) => changeDate(date)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Gross Salary</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="gross_salary" value={localprocess.gross_salary} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Net Salary</label>
                                    <input type="text" onChange={(e) => changeInputEvent(e)} name="net_salary" value={localprocess.net_salary} className="form-control" />
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

export default PostPayrollProcessing;