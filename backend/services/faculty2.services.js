var dao=require('../dao/faculty2.dao');

//get func for Faculty2...........
let getFaculty2=async ()=>{
    let rows;
     await dao.getFaculty2().then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Faculty2...........
let postFaculty2=async (req,res)=>{
    let rows;
     await dao.postFaculty2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Faculty2...........
let putFaculty2=async (req,res)=>{
    let rows;
     await dao.putFaculty2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Faculty2...........
let deleteFaculty2=async (req,res)=>{
    let rows;
     await dao.deleteFaculty2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getFaculty2,postFaculty2,putFaculty2,deleteFaculty2}