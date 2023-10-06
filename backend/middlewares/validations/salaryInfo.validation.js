const utils = require('../../utils/app.utils');

const getSalaryInfoByIdValidation = (req,res,next)=>{
    if(utils.isValidId(req.params.id)) res.status(400).send("ID IS INVALID");
    else next();
}

module.exports={getSalaryInfoByIdValidation};