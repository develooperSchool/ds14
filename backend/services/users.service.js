var userdao=require("../dao/users.dao")
const getAllUsers=()=>{
    
    var users=userdao.getAllUsers()
    return users
}

module.exports={getAllUsers}