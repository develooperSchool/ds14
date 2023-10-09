var services=require("../services/enrollment.services");

//get function for enrollment...............
let getEnrollment=(req,res)=>{
    services.getEnrollment().then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//post function for enrollment...............
let postEnrollment=(req,res)=>{
    services.postEnrollment(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//update function for enrollment...............
let putEnrollment=(req,res)=>{
    services.putEnrollment(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//delete function for enrollment...............
let deleteEnrollment=(req,res)=>{
    services.deleteEnrollment(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getEnrollment,postEnrollment,putEnrollment,deleteEnrollment};