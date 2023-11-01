let db=require('../config/db-config');
let sqlErr=require('../errors/SqlError')

let getSubjects=async(req,res)=>{
    try{
        let q='select * from subjects';
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let postSubjects=async(req,res)=>{
    try{
        let q='insert into subjects values (?,?,?,?,?)';
        let {sub_id,subject,duration,faculty_id,syllabus} =req.body;
        let values = [sub_id,subject,duration,faculty_id,syllabus];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let putSubjects=async(req,res)=>{
    try{
        let q=`update subjects set subject=?,  duration=?, faculty_id=? ,syllabus=? where sub_id = ${req.params.id}`;
        let {subject,duration,faculty_id,syllabus} =req.body;
        let values = [subject,duration,faculty_id,syllabus];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

let deleteSubjects=async(req,res)=>{
    try{
        let q=`delete from subjects  where sub_id= ${req.params.id}`;
        let values = [];    
        let [rows,fields]=await db.query(q,values)
        return rows;
    }
    catch(err){throw new sqlErr(String(err.sqlMessage).toUpperCase(),res)}
};

module.exports={getSubjects,postSubjects,putSubjects,deleteSubjects}