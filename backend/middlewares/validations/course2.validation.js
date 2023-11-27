const utils = require("../../utils/app.utils");
const err=require('../../errors/InvalidCourse2Error');


const getCourseByIdValidation =(req, res, next)=>{
  
  if(utils.isInvalidId(req.params.Id)){throw new err.InvalidCourseId("ENTER CORRECT ID",res)}
  next();
}

const postCourse2Validation = (req, res, next) => {
    const { course_id,courseName,courseDuration,courseFees}=req.body;

    if (utils.isInvalidName(courseName)) { throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME",res) };
    if(utils.isInvalidName(courseDuration)){ throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ",res) };
    if(utils.isInvalidId(courseFees)){ throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES",res) };
     next();
  };

  const putCourse2Validation=(req,res,next)=>{
    const { courseName,courseDuration,courseFees}=req.body;
  if(utils.isInvalidId(req.params.id)) { throw new err.InvalidCourseId("ENTER CORRECT ID",res)  };
  if(utils.IsInvalidN(courseName)) { throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME",res) };
  if(utils.IsInvalidNameNum(courseDuration)){ throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ",res)  };
  if(utils.isInvalidId(courseFees)){ throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES",res)  };
   next();
}

const deleteCourse2validation=(req,res,next)=>{
    if(utils.isInvalidId(req.params.id)) { throw new err.InvalidCourseId("ENTER CORRECT ID",res)  };
    next();
}


  module.exports={postCourse2Validation,putCourse2Validation,deleteCourse2validation,getCourseByIdValidation};