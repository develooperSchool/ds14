var services=require("../services/course2.services");

//get function for courses...............
let getCourse2=(req,res)=>{
    services.getCourse2().then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//post function for Course2...............
let postCourse2=(req,res)=>{
    services.postCourse2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//update function for Course2...............
let putCourse2=(req,res)=>{
    services.putCourse2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//delete function for Course2...............
let deleteCourse2=(req,res)=>{
    services.deleteCourse2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2};