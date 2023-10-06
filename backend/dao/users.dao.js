const { error } = require("@hapi/joi/lib/base")
const db = require("../config/db-config")
const getAllUsers= async()=>{
    let result =[]
    let values= []
   try{
    let sqlQuery = "select * from user_master"
    const [rows,fields] = await db.query(sqlQuery,values)
    result=rows
   }
   catch(err){
    console.error(err)
   }
   return result
    
}

const getUserById = async (userId)=>{
let values = [userId]
let result = []
try{
    let query = "SELECT * FROM user_master where user_id = ?"
    const [rows, fields] = await db.query(query,values)
    result = rows
}catch(err){
    console.error(err)
}
return result
}

const getUserByEmail = async (email)=>{
    let values=[email]
    let result=[]
    try{
        let query = "SELECT * FROM user_master where email = ?"
        const[rows,fields] = await db.query(query,values)
        result=rows
    }catch(err){
        console.error(err)
    }
    return result
}

const updateUserRoleById = async(id,body)=>{
    let message = ""
    const {roleId} =body
    try{
        let sqlQuery = "UPDATE user_master set role_id = ? where user_id = ?"
        const [result,fields] = await db.query(sqlQuery,[roleId,id])
        console.log(result)
        if (result.affectedRows>0) message = "User Role updated successfully"
        else message="Failed to update"
    }
    catch(error) {
        console.log(error)
        message ="Error" + error.message
    }
    return message
    }


const deactivateUserById = async (id,body)=>{
    let message = ""
    const {isActive} =body
    try{
        let sqlQuery = "UPDATE user_master set is_active = ? where user_id= ?"
        const[result,fields] = await db.query(sqlQuery,[isActive,id])
        console.log(result)
        if(result.affectedRows>0) message = "User deactivated successfully"
        else message= "Failed to deactivate"

    }
    catch(error){
        console.log(error)
        message= "Error "+ error.message
    }
    return message
}

const createUser = async(body) =>{
    let message =""
    const { firstName,
    lastName,
    email,
    contact,
    address,
    qualification,
    passingYear,
    dob,
    gender,
    casteCategory,
    subcaste,
    creationTs,
    updationTs,
    createdBy,
    updatedBy,
    isActive,
    roleId, password} = body

    // let query = "";
    // let row = [],
    //   values = [];
    try {
        values= [firstName,
            lastName,
            email,
            contact,
            address,
            qualification,
            passingYear,
            dob,
            gender,
            casteCategory,
            subcaste,
            creationTs,
            updationTs,
            createdBy,
            updatedBy,
            isActive,
            roleId, password]
            query= "INSERT INTO user_master(first_name, last_name,email,contact,address,qualification,passing_year,dob,gender,caste_category,subcaste,creation_ts,updation_ts,created_by,updated_by,is_active,role_id, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
            const [result,fields]=await db.query(query,values)
            if(result.affectedRows>0)message = "New User Created successfully"
            else message = "Failed to create new user"
    }
    catch(error){
    console.log(error)
    message = "ERROR: " + error.message

    }
    return message
    }


module.exports={getAllUsers, getUserById, getUserByEmail,updateUserRoleById,deactivateUserById, createUser}