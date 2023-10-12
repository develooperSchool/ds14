const { result } = require("@hapi/joi/lib/base");
const db = require("../config/db-config");
const SqlError=require("../errors/SqlError");

const getAllRoles = async (req,res) => {
  let result = [];
  let values = [];
  try {
    let sqlQuery = "select * from user_role"
    const [rows, feild] = await db.query(sqlQuery, values);
    result = rows
  } catch (err) {
    throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
  }
  return result;
};

///get role by id
const getRoleById = async (req,res)=>{
  let result = [];
  let values = [req.params.id];
  try {
    let sqlQuery = "select * from user_ro where role_id=?"
    const [rows] = await db.query(sqlQuery, values);
    result = rows
  } catch (err) {
    throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
  }
  return result;

}

const deleteRoleById = async (req,res) => {
  
  try {
    let row =[req.params.id]
    let sqlQuery = 'DELETE FROM user_role WHERE role_ = ?';
    const rows = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
  }
  return row;
};

//
const addNewRole = async (body)=>{
  const {name} = body;
  let message = "";

 try{
  let sqlQuery = "INSERT INTO user_role (role_name) VALUES (?)";
  const [result , feilds] = await db.query(sqlQuery,[name]);
  console.log("result",result)

 }catch(error){
  throw new SqlError(String (error.sqlMessage).toUpperCase(),res)
 }
 return message;
}

const updateRoleById = async (id,body)=>{
  let {name}=body;
  let message = "";
  try{
    let sqlQuery = "UPDATE user_role set role_name = ? WHERE role_id = ?"; 
  const [result,feilds]= await db.query(sqlQuery,[name ,id]);
  console.log(result)
  }
  catch(err){
    throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
  }

return message
  
}
const updateUserById = async (id,body)=>{

  
  let{username}=body;
  let message ="";
  try{
    let sqlQuery = "UPDATE user_master set first_name =? WHERE user_id = ?";
    const [result,feild]=await db.query(sqlQuery,[username,id])
    console.log(result)
  }
  catch(err){
    throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
  }
  return message
}
const userLogin = async (username,password)=>{
  let message = "";
try{
  let sqlQuery = "SELECT * FROM user_master WHERE emai =? AND password = ?";
  const[result,feild]= await db.query(sqlQuery,[username,password])
  
  if(result.length>0){
    message = "login user successfully"
  }
  else{
    message="USER NOT FOUND"
  }
}
catch(err){
  throw new SqlError(String (err.sqlMessage).toUpperCase(),res)
}
return message;
}


module.exports = {
  getAllRoles,
  getRoleById,
  deleteRoleById,
  addNewRole,
  updateRoleById,
  updateUserById,
  userLogin
  
}