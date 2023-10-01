const joi=require("@hapi/joi")

const schema={

    
    role:joi.object({
        id:joi.string().max(100).min(3).required(),
        name:joi.string().max(10).min(5).required()
    })

}
module.exports=schema;