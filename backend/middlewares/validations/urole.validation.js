const utils=require("../../utils/app.utils")
const httpStatusCode = require("../../utils/HttpStatusCode")

const getRoleByIdValidation = (req, res, next) => {
    if (utils.isInvalidId(req.params.id)) res.status(200).send("INVALID ID");
    else next();
  };

  const addRoleValidation=(req,res,next)=>{
    const{name}=req.body;
    if(utils.invalidName(name)) res.status(500).send("PLEASE ENTER CORRECT NAME");
    else next();
  };
  const userLoginValidation = (req ,res, next)=>{
    if(utils.isInvalidEmail(req.body.username)) res.status(500).send("INVALID USERNAME")
    if(utils.isInvalidPassword(req.body.password)) res.status(500).send("INVALID PASSWORD")
  }




  
  module.exports ={
    getRoleByIdValidation,
    addRoleValidation,
    userLoginValidation
    
  }
