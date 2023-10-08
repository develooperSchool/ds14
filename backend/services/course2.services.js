var dao=require('../dao/course2.dao');

//get func for Course2...........
let getCourse2=async ()=>{
    let rows;
     await dao.getCourse2().then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Course2...........
let postCourse2=async (req,res)=>{
    let rows;
     await dao.postCourse2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Course2...........
let putCourse2=async (req,res)=>{
    let rows;
     await dao.putCourse2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Course2...........
let deleteCourse2=async (req,res)=>{
    let rows;
     await dao.deleteCourse2(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2}