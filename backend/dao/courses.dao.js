let db=require('../config/db-config');

// get query for courses............
let getCourses=async()=>{
    try{
        let q='select * from courses';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// post query for courses............
let postCourses=async(req)=>{
    try{
        let q='insert into courses values (?,?,?,?)';
        let {course_id, course_name, course_duration, course_fees} =req.body;
        let values = [course_id, course_name, course_duration, course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// update query for courses............
let putCourses=async(req)=>{
    try{
        let q=`update courses set course_name=?, course_duration=? ,course_fees=?  where course_id = ${req.params.id}`;
        let {course_name, course_duration, course_fees} =req.body;
        let values = [course_name, course_duration, course_fees];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// delete query for courses............
let deleteCourses=async(req)=>{
    try{
        let q=`delete from courses  where course_id = ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};




module.exports={getCourses,postCourses,putCourses,deleteCourses}