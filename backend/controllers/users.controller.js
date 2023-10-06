const { error } = require("@hapi/joi/lib/base")
var userservice=require("../services/users.service")

const getAllUsers = async(req,res)=>{
   await userservice.getAllUsers()
   .then((rows)=>{
    console.log(rows)
    res.status(200).json(rows)
   })
   .catch((err)=>{
    console.error(err)
   })
}

const getUserById = async(req,res) =>{
    await userservice.getUserById(req.params.id)
    .then((rows)=>{
        console.log(rows)
        res.status(200).json(rows)
    })
    .catch((error) =>{
        console.error(error)
    })
}

const getUserByEmail = async (req,res)=>{
    await userservice.getUserByEmail(req.query.email)
    .then((rows)=>{
        console.log(rows)
        res.status(200).json(rows)
    })
    .catch((error)=>{
        console.error(error)
    })
}

const updateUserRoleById =async (req,res)=>{
    await userservice.updateUserRoleById(req.params.id,req.body)
    .then((result)=> res.status(200).send(result))
    .catch((error) =>{res.status(500).send(error)})
}

const deactivateUserById = async (req,res) =>{
    await userservice.deactivateUserById(req.params.id,req.body)
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
}

const createUser = async(req,res)=>{
    await userservice.createUser(req.body)
    .then((result) =>{res.status(201).send(result)})
    .catch((error) => res.status(500).send(error))
}

module.exports={getAllUsers, 
                getUserById,
                getUserByEmail,
                updateUserRoleById,
                deactivateUserById,
                createUser}