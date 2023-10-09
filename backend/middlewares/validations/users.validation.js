const userUtil = require("../../utils/app.utils")
const httpStatusCode =require("../../utils/HttpStatusCode")

const getUserValidationByID = (req,res,next)=>{
    if(userUtil.isInvalidId(req.params.id))
    res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
    else next()
}

const updatetUserRoleValidationByID = (req,res,next)=>{
    if(userUtil.isInvalidId(req.params.id))
    res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
    else next()
}

const deactivateUserValidationByID = (req,res,next)=>{
    if(userUtil.isInvalidId(req.params.id))
    res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
    else next()
}

const createUserValidation = (req,res,next) =>{
   if(userUtil.isInvalidName(req.body.firstName)){
        res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid First Name")
   }

    if(userUtil.isInvalidName(req.body.lastName)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Last Name")
    }

    if(userUtil.isInvalidEmail(req.body.email)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Email")
    }

    if(userUtil.isInValidContact(req.body.contact)){
    res.status(httpStatusCode.BAD_REQUEST).send("contact cannot be null or undefined")
    }

    if(userUtil.isNullOrUndefined(req.body.qualification)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Contact")
    }

    if(userUtil.isInvalidYear(req.body.passingYear)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Passing Year")
    }

    if(userUtil.isNullOrUndefined(req.body.dob)){
    res.status(httpStatusCode.BAD_REQUEST).send("Date of Birth cannot be null or undefined")
    }

    if(userUtil.isNullOrUndefined(req.body.gender)){
    res.status(httpStatusCode.BAD_REQUEST).send("gender cannot be null or undefined")
    }

    if(userUtil.isInvalidName(req.body.casteCategory)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid casteCategory")
    }

    if(userUtil.isInvalidName(req.body.subcaste)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid subcaste")
    }

    if(userUtil.isInvalidPassword(req.body.password)){
    res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid password ")
    }
   else next()
}

module.exports = {createUserValidation,
                  getUserValidationByID,
                updatetUserRoleValidationByID,
                deactivateUserValidationByID}