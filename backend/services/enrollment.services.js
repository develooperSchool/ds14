var dao=require('../dao/enrollment.Dao');

let getEnrollment=async (req,res)=>{
    let rows;
     await dao.getEnrollment(res,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let postEnrollment=async (req,res)=>{
    let rows;
     await dao.postEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let putEnrollment=async (req,res)=>{
    let rows;
     await dao.putEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let deleteEnrollment=async (req,res)=>{
    let rows;
     await dao.deleteEnrollment(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

module.exports={getEnrollment,postEnrollment,putEnrollment,deleteEnrollment}