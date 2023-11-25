var services=require("../services/faculty2.services");
const stCode=require('../utils/HttpStatusCode');

let getFaculty2=(req,res)=>{
    services.getFaculty2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let postFaculty2=(req,res)=>{
    services.postFaculty2(req,res).then((resp)=>{ 
        res.status(stCode.CREATED).json({resp});
    }).catch((err)=>console.log(err));
};

let putFaculty2=(req,res)=>{
    services.putFaculty2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let deleteFaculty2=(req,res)=>{
    services.deleteFaculty2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

module.exports={getFaculty2,postFaculty2,putFaculty2,deleteFaculty2};