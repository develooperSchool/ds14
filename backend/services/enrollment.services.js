var dao=require('../dao/enrollment.dao');

//get func for enrollment...........
let getEnrollment=async ()=>{
    let rows;
     await dao.getEnrollment().then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Enrollment...........
let postEnrollment=async (req,res)=>{
    let rows;
     await dao.postEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Enrollment...........
let putEnrollment=async (req,res)=>{
    let rows;
     await dao.putEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for enrollment...........
let deleteEnrollment=async (req,res)=>{
    let rows;
     await dao.deleteEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getEnrollment,postEnrollment,putEnrollment,deleteEnrollment}