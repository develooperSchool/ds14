var dao=require('../dao/faculty2.Dao');

let getFaculty2=async (req,res)=>{
    let rows;
     await dao.getFaculty2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};


let getFaculty=async (req,res)=>{
    let rows;
     await dao.getFaculty(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let postFaculty2=async (req,res)=>{
    let rows;
     await dao.postFaculty2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let putFaculty2=async (req,res)=>{
    let rows;
     await dao.putFaculty2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

let deleteFaculty2=async (req,res)=>{
    let rows;
     await dao.deleteFaculty2(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};

module.exports={getFaculty2,getFaculty,postFaculty2,putFaculty2,deleteFaculty2}