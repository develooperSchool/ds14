let db=require('../config/db-config');

// get query for Subjects............
let getSubjects=async()=>{
    try{
        let q='select * from subjects';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// post query for Subjects............
let postSubjects=async(req)=>{
    try{
        let q='insert into subjects values (?,?,?,?,?)';
        let {sub_id,subject,duration,faculty_id,syllabus} =req.body;
        let values = [sub_id,subject,duration,faculty_id,syllabus];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// update query for Subjects............
let putSubjects=async(req)=>{
    try{
        let q=`update subjects set subject=?,  duration=?, faculty_id=? ,syllabus=? where sub_id = ${req.params.id}`;
        let {subject,duration,faculty_id,syllabus} =req.body;
        let values = [subject,duration,faculty_id,syllabus];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};



// delete query for Subjects............
let deleteSubjects=async(req)=>{
    try{
        let q=`delete from subjects  where sub_id= ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){console.log(err)}
};




module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects}