const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");
const getAllUsers = async (res) => {
  let result = [];
  let values = [];
  try {
    let sqlQuery = "select * from user_master";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getUserById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    let query = "SELECT * FROM user_master where user_id = ?";
    const [rows, fields] = await db.query(query, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getAllActiveUsers = async (req, res) => {
  let values = [];
  let result = [];
  try {
    let query = "SELECT * FROM user_master where is_active = true";
    const [rows, fields] = await db.query(query, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getUserByEmail = async (req, res) => {
  let values = [req.body.email];
  let result = [];
  try {
    let query = "SELECT * FROM user_master where email = ?";
    const [rows, fields] = await db.query(query, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const updateUserRoleById = async (req, res) => {
  const values = [req.body.roleId, req.params.id];
  try {
    let sqlQuery = "UPDATE user_master set role_id = ? where user_id = ?";
    const [result, fields] = await db.query(sqlQuery, values);

    if (result.affectedRows > 0) message = "User Role updated successfully";
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deactivateUserById = async (req, res) => {
  const values = [req.params.id];
  let result = [];
  try {
    let sqlQuery = "UPDATE user_master set is_active = false where user_id= ?";
    const [result, fields] = await db.query(sqlQuery, values);

    if (result.affectedRows > 0) message = "User deactivated successfully";
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const createUser = async (req, res) => {
  let message = "";
  const {
    firstName,
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
    roleId,
    password,
  } = req.body;

  try {
    values = [
      firstName,
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
      roleId,
      password,
    ];
    query =
      "INSERT INTO user_master(first_name, last_name,email,contact,address,qualification,passing_year,dob,gender,caste_category,subcaste,is_active,role_id, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const [result, fields] = await db.query(query, values);
    if (result.affectedRows > 0) message = "New User Created successfully";
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return message;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserRoleById,
  deactivateUserById,
  createUser,
  getAllActiveUsers,
};
