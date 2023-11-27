const utils = require("../../utils/app.utils");
const err=require('../../errors/invalidTimeErr')

const postTimeValidation=(req,res,next)=>{
    const { sub_id,time,user_id}=req.body;

    if (utils.IsInvalidNameNum(time)) { throw new err.InvalidTime("ENTER CORRECT TIME FIELD",res) };
    if(utils.isInvalidId(sub_id)){ throw new err.InvalidSubId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(user_id)){ throw new err.InvalidFacId("ENTER CORRECT ID",res) };
     next();
}

const putTimeValidation=(req,res,next)=>{
    const { sub_id,time,faculty_id}=req.body;

    if (utils.IsInvalidNameNum(time)) {  throw new err.InvalidTime("ENTER CORRECT TIME FIELD",res) };
    if (utils.isInvalidId(req.params.id)) { throw new err.InvalidId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(sub_id)){ throw new err.InvalidSubId("ENTER CORRECT ID",res) };
    if(utils.isInvalidId(faculty_id)){ throw new err.InvalidFacId("ENTER CORRECT ID",res) };
     next();
}


const deleteTimeValidation=(req,res,next)=>{
    if (utils.isInvalidId(req.params.Id)) { throw new err.InvalidId("ENTER CORRECT ID",res) };
    next();
}

module.exports={postTimeValidation,putTimeValidation,deleteTimeValidation}