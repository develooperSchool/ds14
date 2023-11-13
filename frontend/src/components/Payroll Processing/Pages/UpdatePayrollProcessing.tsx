import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as PayrollProcessingAction from "../../../Redux/PayrollProcessingRedux/payrollprocessing.action"
import * as PayrollProcessingReducer from "../../../Redux/PayrollProcessingRedux/payrollprocessing.reducer"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IProcessing } from "../Model/IProcessing";


const UpdatePayrollProcessing: React.FC = () => {

    const dispatch: AppDispatch = useDispatch()

    //Data from Redux Store
    const processingReduxState: PayrollProcessingReducer.InitialState = useSelector((state: RootState) => {
        return state[PayrollProcessingReducer.processingFeatureKey]
    })

    const { process } = processingReduxState


    const { Id } = useParams()
    const navi = useNavigate()

    const [localpayroll, setlocalpayroll] = useState<IProcessing>(
        {
            user_id: 0,
            payroll_date: "",
            gross_salary: 0,
            net_salary: 0
        }
    )

    useEffect(() => {
        if (Id) {
            dataFromServer(Id)
        }
    }, [Id])

    useEffect(() => {
        if (process && Object.keys(process).length > 0) {
            setlocalpayroll({
                ...localpayroll,
                user_id: process.user_id,
                payroll_date: process.payroll_date,
                gross_salary: process.gross_salary,
                net_salary: process.net_salary
            })
        }
    }, [process])


    const dataFromServer = (Id: string) => {
        dispatch(PayrollProcessingAction.getProcessingAction({ Id: Id }))
    }



    const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setlocalpayroll({
            ...localpayroll,
            [event.target.name]: event.target.value
        })
    }

    const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(PayrollProcessingAction.updateProcessingAction({ updateprocess: localpayroll, Id: Id })).then((res: any) => {
            if (res && !res.error) {
                navi('/')
            }
        })
    }


    return (
        <>
            <pre>{JSON.stringify(localpayroll)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Update Payroll Processing</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eum omnis quia nulla sunt eos quod animi ipsum tempore facilis possimus magni blanditiis voluptates, vitae et perferendis quibusdam maiores accusantium praesentium doloremque. Fuga repudiandae hic, eos voluptatem dignissimos nesciunt necessitatibus repellat error quo! Eligendi cum sunt, aperiam fugit labore mollitia.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card p-3">
                            <div className="card-header bg-warning">
                                <h4>Update Payroll Processing</h4>
                            </div>
                            <form onSubmit={(e) => submitData(e)} className="mt-2">
                                <div className="mb-2">
                                    <label className="form-label">User Id</label>
                                    <input type="text" onChange={(e) => changeInput(e)} name="user_id" value={localpayroll.user_id} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Payroll Date</label>
                                    <input type="date" onChange={(e) => changeInput(e)} name="payroll_date" value={localpayroll.payroll_date} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Gross Salary</label>
                                    <input type="text" onChange={(e) => changeInput(e)} name="gross_salary" value={localpayroll.gross_salary} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Net Salary</label>
                                    <input type="text" onChange={(e) => changeInput(e)} name="net_salary" value={localpayroll.net_salary} className="form-control" />
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

export default UpdatePayrollProcessing;
