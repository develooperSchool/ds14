const utils = require("../../utils/app.utils");
const stcode=require('../../utils/HttpStatusCode');


const postCourse2Validation = (req, res, next) => {
    const { course_id,course_name,course_duration,course_fees}=req.body;

    if (utils.IsInvalidN(course_name)) { return res.status(stcode.BAD_REQUEST).send("INVALID course_name") };
    if(utils.IsInvalidN(course_duration)){ return res.status(stcode.BAD_REQUEST).send("INVALID course_duration") };
    if(utils.isInvalidId(course_fees)){ return res.status(stcode.BAD_REQUEST).send("INVALID course_fees") };
     next();
  };

  const putCourse2Validation=(req,res,next)=>{
    const { course_name,course_duration,course_fees}=req.body;
  if(utils.isInvalidId(req.params.id)) { return res.status(stcode.BAD_REQUEST).send("INVALID course_id") };
  if(utils.IsInvalidN(course_name)) { return res.status(stcode.BAD_REQUEST).send("INVALID course_name") };
  if(utils.IsInvalidNameNum(course_duration)){ return res.status(stcode.BAD_REQUEST).send("INVALID course_duration") };
  if(utils.isInvalidId(course_fees)){ return res.status(stcode.BAD_REQUEST).send("INVALID course_fees") };
   next();
}

const deleteCourse2validation=(req,res,next)=>{
    if(utils.isInvalidId(req.params.id)) { return res.status(stcode.BAD_REQUEST).send("INVALID course_id") };
    next();
}


  module.exports={postCourse2Validation,putCourse2Validation,deleteCourse2validation};