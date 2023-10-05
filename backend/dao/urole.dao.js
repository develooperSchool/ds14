const { result } = require("@hapi/joi/lib/base");
const db = require("../config/db-config");

const getAllRoles = async () => {
  let result = [];
  let values = [];
  try {
    let sqlQuery = "select * from user_role"
    const [rows, feild] = await db.query(sqlQuery, values);
    result = rows
  } catch (err) {
    console.error(err);
  }
  return result;
};

///get role by id
const getRoleById = async (id)=>{
  let result = [];
  let values = [id];
  try {
    let sqlQuery = "select * from user_role where role_id=?"
    const [rows] = await db.query(sqlQuery, values);
    result = rows
  } catch (err) {
    console.error(err);
  }
  return result;

}

const deleteRoleById = async (id) => {
  
  try {
    let row =[id]
    let query = 'DELETE FROM user_role WHERE role_id = ?';
    const rows = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
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
  console.log(error)
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
    console.log(err)
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
    console.log(err)
  }
  return message
}



module.exports = {
  getAllRoles,
  getRoleById,
  deleteRoleById,
  addNewRole,
  updateRoleById,
  updateUserById
  
}