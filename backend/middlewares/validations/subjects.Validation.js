const utils = require("../../utils/app.utils");
const stcode=require('../../utils/HttpStatusCode');


const postSubjectsValidation = (req, res, next) => {
    const { sub_id,subject,duration,faculty_id,syllabus}=req.body;

    if (utils.isInvalidId(sub_id)) { return res.status(stcode.BAD_REQUEST).send("INVALID subject id") };
    if(utils.IsInvalidN(subject)){ return res.status(stcode.BAD_REQUEST).send("INVALID subject name") };
    if(utils.IsInvalidNameNum(duration)){ return res.status(stcode.BAD_REQUEST).send("INVALID duration field") };
    if(utils.isInvalidId(faculty_id)){ return res.status(stcode.BAD_REQUEST).send("INVALID faculty_id") };
    if(utils.IsInvalidN(syllabus)){ return res.status(stcode.BAD_REQUEST).send("INVALID syllabus field") };
     next();
  };



  

const putSubjectsValidation = (req, res, next) => {
    const { subject,duration,faculty_id,syllabus}=req.body;

    if (utils.isInvalidId(req.params.id)) { return res.status(stcode.BAD_REQUEST).send("INVALID subject id") };
    if(utils.IsInvalidN(subject)){ return res.status(stcode.BAD_REQUEST).send("INVALID subject name") };
    if(utils.IsInvalidNameNum(duration)){ return res.status(stcode.BAD_REQUEST).send("INVALID duration field") };
    if(utils.isInvalidId(faculty_id)){ return res.status(stcode.BAD_REQUEST).send("INVALID faculty_id") };
    if(utils.IsInvalidN(syllabus)){ return res.status(stcode.BAD_REQUEST).send("INVALID syllabus field") };
     next();
  };

  const deleteSubjectsValidation=(req,res,next)=>{
  if (utils.isInvalidId(req.params.id)) { return res.status(stcode.BAD_REQUEST).send("INVALID subject id") };
next();
}




module.exports={postSubjectsValidation,putSubjectsValidation,deleteSubjectsValidation}