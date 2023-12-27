import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as PayrollProcessingAction from "../../../Redux/PayrollProcessingRedux/payrollprocessing.action"
import * as PayrollProcessingReducer from "../../../Redux/PayrollProcessingRedux/payrollprocessing.reducer"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IProcessing, IUpdateProcessing } from "../Model/IProcessing";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UpdatePayrollProcessing: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const processingReduxState: PayrollProcessingReducer.InitialState = useSelector((state: RootState) => {
        return state[PayrollProcessingReducer.processingFeatureKey]
    })

    const { process } = processingReduxState;
    const { payroll_id: Id } = useParams();

    const navigate = useNavigate();

    const [localProcess, setlocalProcess] = useState<IProcessing>({
        payroll_id: 0,
        user_id: 0,
        payroll_date: "",
        gross_salary: 0,
        net_salary: 0,
    });

    useEffect(() => {
        if (Id) {
            dataFromServer(Id);
        }
    }, [Id]);

    useEffect(() => {
        if (process && Object.keys(process).length > 0) {
            setlocalProcess({
                ...localProcess,
                user_id: process.user_id,
                payroll_date: process.payroll_date,
                gross_salary: process.gross_salary,
                net_salary: process.net_salary,
            });

            if (process.payroll_date && process.payroll_date !== "") {
                let dateArray = process.payroll_date.split("-");
                let date: Date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]))

                setStartDate(date)
            }
        }
    }, [process]);

    useEffect(() => {
        reflectDate();
    }, [startDate])

    const changeDate = (date: Date | null) => {
        setStartDate(date);
    };

    const reflectDate = () => {
        let day = startDate?.getDate();
        let month: string | number =
            startDate?.getMonth() !== undefined ? startDate?.getMonth() + 1 : "";
        let year = startDate?.getFullYear();

        let fullDay: string | number = "";
        let fullMonth: string | number = "";
        if (day !== undefined && month !== undefined) {
            fullDay = day?.toString().length < 2 ? `0${day}` : day;
            fullMonth = month?.toString().length < 2 ? `0${month}` : month;
        }
        const formattedDate = `${fullDay}-${fullMonth}-${year}`;
        console.log("formattedDate=", formattedDate)
        setlocalProcess({
            ...localProcess,
            payroll_date: formattedDate,
        });

    }

    const dataFromServer = (Id: string) => {
        dispatch(PayrollProcessingAction.getProcessingAction({ Id: Id }));
    };

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setlocalProcess({
            ...localProcess,
            [event.target.name]: event.target.value,
        });
    };


    const submitData = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        let updateprocess: IUpdateProcessing = {
            user_id: process.user_id,
            payroll_date: localProcess.payroll_date,
            gross_salary: localProcess.gross_salary,
            net_salary: localProcess.net_salary,
        };
        dispatch(PayrollProcessingAction.updateProcessingAction({ updateprocess, Id })).then(
            (res: any) => {
                if (res && !res.error) {
                    navigate('/payroll-processing');
                }
            }
        );
    };

    return (
        <>

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
                                    <input type="text" onChange={(e) => changeInput(e)} name="user_id" value={localProcess.user_id} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Payroll Date</label>

                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        selected={startDate}
                                        onChange={(date) => changeDate(date)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Gross Salary</label>
                                    <input type="number" onChange={(e) => changeInput(e)} name="gross_salary" value={localProcess.gross_salary} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Net Salary</label>
                                    <input type="number" onChange={(e) => changeInput(e)} name="net_salary" value={localProcess.net_salary} className="form-control" />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-success">UPDATE</button>
                                    <Link
                                        to={`/payroll-processing`}
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
    )
}

export default UpdatePayrollProcessing;
