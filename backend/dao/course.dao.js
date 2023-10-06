const db = require("../config/db-config");

const getAllCourses = async () => {
  let values = [];
  let result = [];
  try {
    let sqlQuery = "select * from user_master";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    console.error(err);
  }
  return result;
};

const getCourseById = async (courseId) => {
  let values = [courseId];
  let result = [];
  try {
    let sqlQuery = "SELECT * FROM user_master where user_id = ?";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    console.error(err);
  }
  return result;
};

const addCourse = async (body) => {
  let message = "";
  const { name } = body;
  try {
    let sqlQuery = "INSERT INTO user_role (role_name) VALUES (?)";
    const [result, fields] = await db.query(sqlQuery, [name]);
    if (result.affectedRows > 0) message = "COURSE ADDED SUCCESSFULLY";
    else message = "FAILED TO ADD COURSE";
  } catch (error) {
    console.log(error);
    message = "ERROR: " + error.message;
  }
  return message;
};

const updateCourse = async (id, body) => {
  let message = "";
  const { name } = body;
  try {
    let sqlQuery = "UPDATE user_role set role_name = ? WHERE role_id = ?";
    const [result, fields] = await db.query(sqlQuery, [name, id]);
    console.log(result);
    if (result.affectedRows > 0) message = "COURSE UDPATED SUCCESSFULLY";
    else message = "FAILED TO UPDATE COURSE";
  } catch (error) {
    console.log(error);
    message = "ERROR: " + error.message;
  }
  return message;
};
module.exports = { getAllCourses, getCourseById, addCourse, updateCourse };
