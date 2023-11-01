let db=require('../config/db-config');
let sqlErr=require('../errors/SqlError')

let getFaculty2=async(req,res)=>{
    try{
        let q='select * from faculty';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let postFaculty2=async(req,res)=>{
    try{
        let q='insert into faculty values (?,?,?)';
        let {sub_id,user_id,faculty_id} =req.body;
        let values = [sub_id,user_id,faculty_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let putFaculty2=async(req,res)=>{
    try{
        let q=`update faculty set sub_id=?,  user_id=?  where faculty_id = ${req.params.id}`;
        let {sub_id,user_id} =req.body;
        let values = [sub_id,user_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let deleteFaculty2=async(req,res)=>{
    try{
        let q=`delete from faculty  where faculty_id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

module.exports={getFaculty2,postFaculty2,putFaculty2,deleteFaculty2}