import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "./Redux/store";
import { Iregister } from "./Model/Iuser";
import * as UserAction from "./Redux/UserRedux/user.action"
import * as UserReducer from "./Redux/UserRedux/user.reducer"

const Registration =()=>{
    const Navigate = useNavigate()
    const dispatch:AppDispatch=useDispatch()
    //Data from redux store

    const employeeReduxState : UserReducer.InitialState = useSelector((state:RootState)=>{
        return state[UserReducer.userFeatureKey]
    })

    const [create,setcreate] = useState<Iregister>(
        {
            firstName: "",
            lastName: "",
            email: "",
            contact:"",
            address:"",
            qualification:"",
            passingYear: 0,
            dob:"" ,
            gender:"",
            caste:"",
            subcaste:"",
            password:""
        })

    
        const changeInputEvent = (event:React.ChangeEvent<HTMLInputElement>)=>{
            setcreate({
                ...create,
                [event.target.name]: event.target.value
            })
        
        }
    
        const submitData=(event:React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault()
            console.log(event)
    
         
            dispatch(UserAction.createUserAction({user:create})).then((res:any)=>{
                if(res && !res.data){
                    Navigate("/")
                }
    
            })
        }
    return(
        <>
        <div className="offset-lg-2 col-lg-8 mt-3">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">Registration Form</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >FirstName</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >LastName</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Contact</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-12 mb-2">
                                <div className="form-group">
                                    <label >Address</label>
                                    <textarea className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Qualification</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Passing Year</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Date of Birth</label>
                                    <input type="Date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Gender</label>
                                    <br />
                                    <input type="radio" value="male" />
                                    <label className="me-5">Male</label>
                                    <input type="radio" value="female" />
                                    <label>Female</label>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Caste</label>
                                    <select name="caste" id="" className="form-control">
                                        <option value="select">Select</option>
                                        <option value="open">OPEN</option>
                                        <option value="obc">OBC</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                        <option value="vjnt">VJNT</option>
                                        <option value="other">OTHER</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Subcaste</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type="submit"  className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-success">Reset</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Registration