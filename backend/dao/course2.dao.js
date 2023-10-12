let db=require('../config/db-config');
let errr=require('../errors/SqlError')

// get query for Course2............
let getCourse2=async()=>{
    try{
        let q='select * from courses';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};



// post query for Course2............
let postCourse2=async(req,res)=>{
    try{
        let q='insert into courses values (?,?,?,?)';
        let {course_id,course_name,course_duration,course_fees} =req.body;
        let values = [course_id,course_name,course_duration,course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
   catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res) }
};



// update query for Course2............
let putCourse2=async(req)=>{
    try{
        let q=`update courses set course_name=?,  course_duration=?, course_fees=?  where course_id = ${req.params.id}`;
        let {course_name,course_duration,course_fees} =req.body;
        let values = [course_name,course_duration,course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};



// delete query for Course2............
let deleteCourse2=async(req)=>{
    try{
        let q=`delete from courses  where course_id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new errr.sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};




module.exports={getCourse2,postCourse2,putCourse2,deleteCourse2}