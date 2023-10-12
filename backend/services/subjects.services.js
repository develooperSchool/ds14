var dao=require('../dao/subjects.dao');

//get func for Subjects...........
let getSubjects=async (req,res)=>{
    let rows;
     await dao.getSubjects(res,res).then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Subjects...........
let postSubjects=async (req,res)=>{
    let rows;
     await dao.postSubjects(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Subjects...........
let putSubjects=async (req,res)=>{
    let rows;
     await dao.putSubjects(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Subjects...........
let deleteSubjects=async (req,res)=>{
    let rows;
     await dao.deleteSubjects(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects}