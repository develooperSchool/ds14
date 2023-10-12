let db=require('../config/db-config');
let errr=require('../errors/SqlError')


// get query for Time............
let getTime=async(res)=>{
    try{
        let q='select * from time_table';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};



// post query for Time............
let postTime=async(req,res)=>{
    try{
        let q='insert into time_table values (?,?,?,?)';
        let {id,sub_id,time,faculty_id} =req.body;
        let values = [id,sub_id,time,faculty_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};



// update query for Time............
let putTime=async(req,res)=>{
    try{
        let q=`update time_table set sub_id=?,  time=?, faculty_id=?  where id = ${req.params.id}`;
        let {sub_id,time,faculty_id} =req.body;
        let values = [sub_id,time,faculty_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};



// delete query for Time............
let deleteTime=async(req,res)=>{
    try{
        let q=`delete from time_table  where id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};




module.exports={getTime,postTime,putTime,deleteTime}