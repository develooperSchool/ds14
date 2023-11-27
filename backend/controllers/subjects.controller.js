var services=require("../services/subjects.services");
const stCode=require('../utils/HttpStatusCode');

let getSubjects=(req,res)=>{
    services.getSubjects(req,res).then((resp)=>{ 
        res.status(stCode.OK).json(resp);
    }).catch((err)=>console.log(err));
};

let postSubjects=(req,res)=>{
    services.postSubjects(req,res).then((resp)=>{ 
        res.status(stCode.CREATED).json(resp);
    }).catch((err)=>console.log(err));
};

let putSubjects=(req,res)=>{
    services.putSubjects(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let deleteSubjects=(req,res)=>{
    services.deleteSubjects(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects};