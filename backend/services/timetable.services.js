var dao=require('../dao/timetable.dao');

//get func for Time...........
let getTime=async ()=>{
    let rows;
     await dao.getTime().then((res)=>{rows=res;}).catch((err)=>{console.log(err)});
     return rows;
};




//post func for Time...........
let postTime=async (req,res)=>{
    let rows;
     await dao.postTime(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
};



//update func for Time...........
let putTime=async (req,res)=>{
    let rows;
     await dao.putTime(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



//delete func for Time...........
let deleteTime=async (req,res)=>{
    let rows;
     await dao.deleteTime(req).then((resp)=>{rows=resp;}).catch((err)=>{console.log(err)});
     return rows;
}



module.exports={getTime,postTime,putTime,deleteTime}