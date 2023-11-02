let db=require('../config/db-config');
let sqlErr=require('../errors/SqlError')

let getEnrollment=async(req,res)=>{
    try{
        let q='select * from student_enrollment';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let postEnrollment=async(req,res)=>{
    
    try{
        let q='insert into student_enrollment values (?,?,?)';
        let {unique_id,user_id,course_id} =req.body;
        let values = [unique_id,user_id,course_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let putEnrollment=async(req,res)=>{
    try{
        let q=`update student_enrollment set user_id=?, course_id=?  where unique_id = ${req.params.id}`;
        let {user_id,course_id} =req.body;
        let values = [user_id,course_id];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let deleteEnrollment=async(req,res)=>{
    try{
        let q=`delete from student_enrollment  where unique_id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

module.exports={getEnrollment,postEnrollment,putEnrollment,deleteEnrollment}