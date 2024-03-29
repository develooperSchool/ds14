const { result } = require("@hapi/joi/lib/base");
const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");
const values = require("@hapi/joi/lib/values");
const Jwt = require("jsonwebtoken");
const jwtKey = "devschool";

const getAllRoles = async (req, res) => {
  let result = [];
  let values = [];
  try {
    let sqlQuery = "select * from user_role";
    const [rows, feild] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

///get role by id
const getRoleById = async (req, res) => {
  let result = [];
  let values = [req.params.id];
  try {
    let sqlQuery = "select * from user_role where role_id=?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deleteRoleById = async (req, res) => {
  try {
    let row = [req.params.id];
    let sqlQuery = "DELETE FROM user_role WHERE role_id = ?";
    const rows = db.execute(sqlQuery, row);
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return rows;
};

//
const addNewRole = async (body) => {
  const { name } = body;
  let message = "";

  try {
    let sqlQuery = "INSERT INTO user_role (role_name) VALUES (?)";
    const [result, feilds] = await db.query(sqlQuery, [name]);
    console.log("result", result);
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return message;
};
const updateUserById = async (req, res) => {
  const userId = req.params.id;
  let result = [];
  let values = [];

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
      userId,
    ];

    let sqlQuery =
      "UPDATE user_master set first_name = ?, last_name = ?, email = ?, contact = ?, address = ?, qualification = ?, passing_year = ?, dob = ?, gender = ?, caste_category = ?, subcaste = ? WHERE user_id = ? ";
    const [rows, field] = await db.query(sqlQuery, values);
    result = rows;
    console.log(result);
  } catch (err) {
    console.log(err);
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const updateRoleById = async (id, body) => {
  let { name } = body;
  let message = "";
  try {
    let sqlQuery = "UPDATE user_role set role_name = ? WHERE role_id = ?";
    const [result, feilds] = await db.query(sqlQuery, [name, id]);
    console.log(result);
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }

  return message;
};

const userLogin = async (username, password) => {
  let response = "";
  let body = {};
  try {
    let sqlQuery = "SELECT * FROM user_master WHERE email = ? AND password = ?";
    const [result, feild] = await db.query(sqlQuery, [username, password]);
    if (result.length > 0) {
      body = result[0];
    } else {
      response = "USER NOT FOUND";
    }
    return response == "" ? body : response;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  deleteRoleById,
  addNewRole,
  updateRoleById,
  updateUserById,
  userLogin,
};
