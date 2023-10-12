const utils = require("../../utils/app.utils")


const  getRoleByIdValidtion = (req, res, next)=>{
   if( utils.isInvalidId(req.params.id) )res.status(400).send('INVALID ID FOR USER ROLE')
   else next()
}
const postRoleByIdvalidation = (req, res, next)=>{
    
    if(utils.isInvalidName(req.params.name)) res.status(400).send("role name can only contain letters, numbers, and underscores")
    else next()
}
 
module.exports = {
    getRoleByIdValidtion,
    postRoleByIdvalidation
}