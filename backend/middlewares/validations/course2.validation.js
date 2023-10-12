const utils = require("../../utils/app.utils");
const err=require('../../errors/InvalidCourse2Error');


const postCourse2Validation = (req, res, next) => {
    const { course_id,course_name,course_duration,course_fees}=req.body;

    if (utils.IsInvalidN(course_name)) { throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME",res) };
    if(utils.IsInvalidN(course_duration)){ throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ",res) };
    if(utils.isInvalidId(course_fees)){ throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES",res) };
     next();
  };

  const putCourse2Validation=(req,res,next)=>{
    const { course_name,course_duration,course_fees}=req.body;
  if(utils.isInvalidId(req.params.id)) { throw new err.InvalidCourseId("ENTER CORRECT ID",res)  };
  if(utils.IsInvalidN(course_name)) { throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME",res,"invalid course name") };
  if(utils.IsInvalidNameNum(course_duration)){ throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ",res)  };
  if(utils.isInvalidId(course_fees)){ throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES",res)  };
   next();
}

const deleteCourse2validation=(req,res,next)=>{
    if(utils.isInvalidId(req.params.id)) { throw new err.InvalidCourseId("ENTER CORRECT ID",res)  };
    next();
}


  module.exports={postCourse2Validation,putCourse2Validation,deleteCourse2validation};