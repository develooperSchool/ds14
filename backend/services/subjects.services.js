var dao=require('../dao/subjects.dao');

//get func for Subjects...........
let getSubjects=async ()=>{
    let rows;
     await dao.getSubjects().then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Subjects...........
let postSubjects=async (req,res)=>{
    let rows;
     await dao.postSubjects(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Subjects...........
let putSubjects=async (req,res)=>{
    let rows;
     await dao.putSubjects(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Subjects...........
let deleteSubjects=async (req,res)=>{
    let rows;
     await dao.deleteSubjects(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects}