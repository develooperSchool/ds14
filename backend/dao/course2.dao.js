let db=require('../config/db-config');
let SqlError=require('../errors/SqlError')

let getCourse2=async(req,res)=>{
    try{
        let q='select * from courses';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new SqlError(String(err.sqlMessage).toUpperCase(),res)}
};

let postCourse2=async(req,res)=>{
    try{
        let q='insert into courses values (?,?,?,?)';
        let {course_id,course_name,course_duration,course_fees} =req.body;
        let values = [course_id,course_name,course_duration,course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
   catch(err){throw new SqlError(String(err.sqlMessage).toUpperCase(),res) }
};

let putCourse2=async(req,res)=>{
    try{
        let q=`update courses set course_name=?,  course_duration=?, course_fees=?  where course_id = ${req.params.id}`;
        let {course_name,course_duration,course_fees} =req.body;
        let values = [course_name,course_duration,course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new SqlError(String(err.sqlMessage).toUpperCase(),res)}
};

let deleteCourse2=async(req,res)=>{
    try{
        let q=`delete from courses  where course_id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new SqlError(String(err.sqlMessage).toUpperCase(),res)}
};

module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2}