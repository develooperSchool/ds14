var services=require("../services/course2.services");
let stCode=require('../utils/HttpStatusCode');

let getCourse2=(req,res)=>{
    services.getCourse2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let postCourse2=(req,res)=>{
    services.postCourse2(req,res).then((resp)=>{ 
        res.status(stCode.CREATED).json({resp});
    }).catch((err)=>console.log(err));
};

let putCourse2=(req,res)=>{
    services.putCourse2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let deleteCourse2=(req,res)=>{
    services.deleteCourse2(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2};