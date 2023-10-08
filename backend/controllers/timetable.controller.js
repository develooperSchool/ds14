var services=require("../services/timetable.services");

//get function for courses...............
let getTime=(req,res)=>{
    services.getTime().then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//post function for Time...............
let postTime=(req,res)=>{
    services.postTime(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//update function for Time...............
let putTime=(req,res)=>{
    services.putTime(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//delete function for Time...............
let deleteTime=(req,res)=>{
    services.deleteTime(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getTime,postTime,putTime,deleteTime};