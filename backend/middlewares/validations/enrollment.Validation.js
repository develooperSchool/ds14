const utils = require("../../utils/app.utils");
const stcode=require('../../utils/HttpStatusCode');
const err=require('../../errors/InvalidEnrollmentErr')

const postEnrollmentValidation=(req,res,next)=>{
    const { unique_id,user_id,course_id}=req.body;

    if (utils.isInvalidId(unique_id)) { throw new err.InvalidUniqueId('ENTER CORRECT ID',res) };
    if(utils.isInvalidId(user_id)){throw new err.InvalidUserId('ENTER CORRECT ID',res) };
    if(utils.isInvalidId(course_id)){ throw new err.InvalidCourseId('ENTER CORRECT ID',res) };
     next();
}

const putEnrollmentValidation=(req,res,next)=>{
    const { user_id,course_id}=req.body;

    if (utils.isInvalidId(req.params.id)) { throw new err.InvalidUniqueId('ENTER CORRECT ID',res) };
    if(utils.isInvalidId(user_id)){ throw new err.InvalidUserId('ENTER CORRECT ID',res) };
    if(utils.isInvalidId(course_id)){ throw new err.InvalidCourseId('ENTER CORRECT ID',res) };
     next();
}

const deleteEnrollmentValidation=(req,res,next)=>{
    if (utils.isInvalidId(req.params.id)) { throw new err.InvalidUniqueId('ENTER CORRECT ID',res) };
    next();
}

module.exports={postEnrollmentValidation,putEnrollmentValidation,deleteEnrollmentValidation}