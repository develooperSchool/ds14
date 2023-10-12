var services=require("../services/timetable.services");
const stCode=require('../utils/HttpStatusCode');

let getTime=(req,res)=>{
    services.getTime(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let postTime=(req,res)=>{
    services.postTime(req,res).then((resp)=>{ 
        res.status(stCode.CREATED).json({resp});
    }).catch((err)=>console.log(err));
};

let putTime=(req,res)=>{
    services.putTime(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

let deleteTime=(req,res)=>{
    services.deleteTime(req,res).then((resp)=>{ 
        res.status(stCode.OK).json({resp});
    }).catch((err)=>console.log(err));
};

module.exports={getTime,postTime,putTime,deleteTime};