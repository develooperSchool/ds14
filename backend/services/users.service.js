const { error } = require("@hapi/joi/lib/annotate")
var userdao=require("../dao/users.dao")
const getAllUsers= async () => {
    
    let rows =[]
    await userdao.getAllUsers()
    .then((res)=>{
        rows=res
    })
    .catch((err)=>{
        console.error(err)
    })
    return rows
}

const getUserById = async (userId)=>{
    let rows= []
    await userdao.getUserById(userId)
    .then((res)=>{
        rows =res
    })
    .catch((err)=>{
        console.error(err)
    })
    return rows
}

const getUserByEmail = async(email)=>{
    let rows = []
    await userdao.getUserByEmail(email)
    .then((res)=>{
        rows=res
    })
    .catch((err)=>{
        console.error(err)
    })
}

const updateUserRoleById =async(id,body)=>{
    let res = ""
    await userdao
    .updateUserRoleById(id,body)
    .then((result)=>(res =result))
    .catch((error) =>(res =error))
    return res
}

const deactivateUserById = async(id,body)=>{
    let res= ""
    await userdao
    .deactivateUserById(id,body)
    .then((result)=> (res=result))
    .catch((error)=>(res=error))
    return res
}

const createUser = async (body)=>{
    let res = ""
    await userdao.createUser(body)
    .then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)})
    return res
}
module.exports={getAllUsers,getUserById,getUserByEmail,updateUserRoleById,deactivateUserById,createUser}