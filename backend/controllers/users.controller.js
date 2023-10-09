const { error } = require("@hapi/joi/lib/base")
const userservice=require("../services/users.service")
const HttpStatusCode = require("../utils/HttpStatusCode")

const getAllUsers = async(req,res)=>{
   await userservice.getAllUsers()
   .then((rows)=>{
    console.log(rows)
    res.status(HttpStatusCode.OK).json(rows)
   })
   .catch((err)=>{
    console.error(err)
   })
}

const getUserById = async(req,res) =>{
    await userservice.getUserById(req.params.id)
    .then((rows)=>{
        console.log(rows)
        res.status(HttpStatusCode.OK).json(rows)
    })
    .catch((error) =>{
        console.error(error)
    })
}

const getUserByEmail = async (req,res)=>{
    await userservice.getUserByEmail(req.query.email)
    .then((rows)=>{
        console.log(rows)
        res.status(HttpStatusCode.OK).json(rows)
    })
    .catch((error)=>{
        console.error(error)
    })
}

const updateUserRoleById =async (req,res)=>{
    await userservice.updateUserRoleById(req.params.id,req.body)
    .then((result)=> res.status(HttpStatusCode.OK).send(result))
    .catch((error) =>{res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error)})
}

const deactivateUserById = async (req,res) =>{
    await userservice.deactivateUserById(req.params.id,req.body)
    .then((result)=>{
        res.status(HttpStatusCode.OK).send(result)
    })
    .catch((error)=>{
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error)
    })
}

const createUser = async(req,res)=>{
    await userservice.createUser(req.body)
    .then((result) =>{res.status(HttpStatusCode.CREATED).send(result)})
    .catch((error) => res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error))
}

module.exports={getAllUsers, 
                getUserById,
                getUserByEmail,
                updateUserRoleById,
                deactivateUserById,
                createUser}