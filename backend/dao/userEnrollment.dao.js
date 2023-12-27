const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");
const getAllUserEnrollment = async (req, res) => {
  let values = [];
  let result = [];
  try {
    let sqlQuery = "select * from enrollment";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
    // console.log("rows", rows);
    // console.log("fields",fields);
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};
const getEnrolledUserById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    sqlQuery = "select * from enrollment where enroll_id = ?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};
const enrollUser = async (req, res) => {
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

    roleId,
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

      roleId,
    ];
    query =
      "INSERT INTO enrollment(first_name, last_name,email,contact,address,qualification,passing_year,dob,gender,caste_category,subcaste,role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const [result, fields] = await db.query(query, values);
    if (result.affectedRows > 0) message = "New User enrolled successfully";
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return message;
};

const updateEnrollUserById = async (req, res) => {
  const enrollId = req.params.id;
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
      enrollId,
    ];

    let sqlQuery =
      "UPDATE enrollment set first_name = ?, last_name = ?, email = ?, contact = ?, address = ?, qualification = ?, passing_year = ?, dob = ?, gender = ?, caste_category = ?, subcaste = ? WHERE enroll_id = ? ";
    const [rows, field] = await db.query(sqlQuery, values);
    result = rows;
    console.log(result);
  } catch (err) {
    console.log(err);
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deleteUserEnrollment = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    let sqlQuery = "DELETE FROM enrollment WHERE enroll_id = ? ";
    let [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

module.exports = {
  getAllUserEnrollment,
  getEnrolledUserById,
  enrollUser,
  updateEnrollUserById,
  deleteUserEnrollment,
};
