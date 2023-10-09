const utils=require("../../utils/app.utils")

const revenueByIdValidation = (req, res, next) => {
    if (utils.isInvalidId(req.params.id)) res.status(httpStatusCode.BAD_REQUEST).send("INVALID ID");
    else next();
  };

  const addRevenueValidation=(req,res,next)=>{
    if(utils.IsInvalidName(req.params.body)) res.status(httpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT NAME");
    else next();
  };




  
  module.exports ={
    revenueByIdValidation,addRevenueValidation
    
  }
