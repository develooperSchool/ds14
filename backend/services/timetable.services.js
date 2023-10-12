var dao=require('../dao/timetable.dao');

//get func for Time...........
let getTime=async (res)=>{
    let rows;
     await dao.getTime(res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Time...........
let postTime=async (req,res)=>{
    let rows;
     await dao.postTime(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Time...........
let putTime=async (req,res)=>{
    let rows;
     await dao.putTime(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Time...........
let deleteTime=async (req,res)=>{
    let rows;
     await dao.deleteTime(req,res).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getTime,postTime,putTime,deleteTime}