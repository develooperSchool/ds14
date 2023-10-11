const utils = require("../../utils/app.utils");
const stcode=require('../../utils/HttpStatusCode');


const postFaculty2Validation = (req, res, next) => {
    const { sub_id,user_id,faculty_id}=req.body;

    if (utils.isInvalidId(sub_id)) { return res.status(stcode.BAD_REQUEST).send("INVALID sub_id") };
    if(utils.isInvalidId(user_id)){ return res.status(stcode.BAD_REQUEST).send("INVALID user_id") };
    if(utils.isInvalidId(faculty_id)){ return res.status(stcode.BAD_REQUEST).send("INVALID faculty_id") };
     next();
  };

  
const putFaculty2Validation = (req, res, next) => {
    const { sub_id,user_id}=req.body;

    if (utils.isInvalidId(sub_id)) { return res.status(stcode.BAD_REQUEST).send("INVALID sub_id") };
    if(utils.isInvalidId(user_id)){ return res.status(stcode.BAD_REQUEST).send("INVALID user_id") };
    if(utils.isInvalidId(req.params.id)){ return res.status(stcode.BAD_REQUEST).send("INVALID faculty_id") };
     next();
  };

  const deleteFaculty2Validation=(req,res,next)=>{
    if(utils.isInvalidId(req.params.id)){ return res.status(stcode.BAD_REQUEST).send("INVALID faculty_id") };
    next();
  }

  module.exports={postFaculty2Validation,putFaculty2Validation,deleteFaculty2Validation}