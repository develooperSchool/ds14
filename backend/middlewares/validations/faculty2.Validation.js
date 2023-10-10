const utils = require("../../utils/app.utils");
const stcode=require('../../utils/HttpStatusCode');
const err=require('../../errors/invalidFaculty2Err')


const postFaculty2Validation = (req, res, next) => {
    const { sub_id,user_id,faculty_id}=req.body;

    if (utils.isInvalidId(sub_id)) { throw new err.InvalidSubId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(user_id)){ throw new err.InvalidUserId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(faculty_id)){ throw new err.InvalidFacId("ENTER CORRECT ID",res) };
     next();
  };

  
const putFaculty2Validation = (req, res, next) => {
    const { sub_id,user_id}=req.body;

    if (utils.isInvalidId(sub_id)) { throw new err.InvalidSubId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(user_id)){ throw new err.InvalidUserId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(req.params.id)){ throw new err.InvalidFacId("ENTER CORRECT ID",res) };
     next();
  };

  const deleteFaculty2Validation=(req,res,next)=>{
    if(utils.isInvalidId(req.params.id)){ throw new err.InvalidFacId("ENTER CORRECT ID",res) };
    next();
  }

  module.exports={postFaculty2Validation,putFaculty2Validation,deleteFaculty2Validation}