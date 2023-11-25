var services=require("../services/enrollment.services");
const stCode=require('../utils/HttpStatusCode')

let getEnrollment=(req,res)=>{
    services.getEnrollment(req,res).then((resp)=>{ 
        res.status(stCode.OK).json(resp);
    }).catch((err)=>console.log(err));
};


let getEnrollmentData=(req,res)=>{
    services.getEnrollmentData(req,res).then((resp)=>{ 
        res.status(stCode.OK).json(resp);
    }).catch((err)=>console.log(err));
};


let getEnrollmentDataById=(req,res)=>{
    services.getEnrollmentDataById(req,res).then((resp)=>{ 
        res.status(stCode.OK).json(resp);
    }).catch((err)=>console.log(err));
};


let postEnrollment=(req,res)=>{
    services.postEnrollment(req,res).then((resp)=>{ 
        res.status(stCode.CREATED).json(resp);
    }).catch((err)=>console.log(err));
};

let putEnrollment=(req,res)=>{
    services.putEnrollment(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let deleteEnrollment=(req,res)=>{
    services.deleteEnrollment(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getEnrollmentDataById,getEnrollment,getEnrollmentData,postEnrollment,putEnrollment,deleteEnrollment};