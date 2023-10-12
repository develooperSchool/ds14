var services=require("../services/subjects.services");

//get function for courses...............
let getSubjects=(req,res)=>{
    services.getSubjects(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//post function for Subjects...............
let postSubjects=(req,res)=>{
    services.postSubjects(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//update function for Subjects...............
let putSubjects=(req,res)=>{
    services.putSubjects(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//delete function for Subjects...............
let deleteSubjects=(req,res)=>{
    services.deleteSubjects(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects};