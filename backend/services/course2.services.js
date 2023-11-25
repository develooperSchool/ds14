var dao=require('../dao/course2.Dao');

let getCourse2=async (req,res)=>{
    let rows=[];
     await dao.getCourse2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};


let getCourse2ById=async (req,res)=>{
    let rows=[];
     await dao.getCourse2ById(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let postCourse2=async (req,res)=>{
    let rows;
     await dao.postCourse2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let putCourse2=async (req,res)=>{
    let rows;
     await dao.putCourse2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};


let deleteCourse2=async (req,res)=>{
    let rows;
     await dao.deleteCourse2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2,getCourse2ById}