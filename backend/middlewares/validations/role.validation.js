const {role} =require("./role.schema")

module.exports={
    addRoleValidation:async(req,res,next)=>{

        const value=await role.validate(req.body);
        if(value.error)
        {
             res.json({
                status:httpStatusCode.BAD_REQUEST,
                descripation:'bad request'
             })
        }
        else{
            next();
        }

    }
}