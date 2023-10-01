var userservice=require("../services/users.service")
const getAllUsers=(req,res)=>{
   let users=userservice.getAllUsers()
    res.json(users)
}

module.exports={getAllUsers}