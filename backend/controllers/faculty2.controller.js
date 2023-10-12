var services=require("../services/faculty2.services");

//get function for faculty...............
let getFaculty2=(req,res)=>{
    services.getFaculty2(res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//post function for Faculty2...............
let postFaculty2=(req,res)=>{
    services.postFaculty2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//update function for Faculty2...............
let putFaculty2=(req,res)=>{
    services.putFaculty2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};



//delete function for Faculty2...............
let deleteFaculty2=(req,res)=>{
    services.deleteFaculty2(req,res).then((resp)=>{ 
        res.status(200).json({resp});
    }).catch((err)=>console.log(err));
};






module.exports={getFaculty2,postFaculty2,putFaculty2,deleteFaculty2};