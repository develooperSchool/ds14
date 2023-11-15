import React from "react";

const ForgotPwd =()=>{
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row"> 
                <div className="col-lg-5 offset-md-3">
                <form action="" className="p-3 bg-secondary">
                    <h3 className="text-center mb-3">Forgot Password</h3>
                    <div className="mb-3">
                    <label htmlFor="email">Enter Your Email to reset Password</label>
                    <input type="email" placeholder="Enter Email" className="form-control" required/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-3" data-bs-toggle="modal" data-bs-target="modal">Submit</button>
                    <div className="modal" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                               <h2 className="modal-title">Message</h2>
                               <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                Please check your email to reset your Password.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">OK</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CANCEL</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default ForgotPwd
