let db = require("../config/db-config");
let SqlError = require("../errors/SqlError");

let getCourses = async (req, res) => {
  try {
    let q = "select * from courses";
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let getCourseById = async (req, res) => {
  try {
    let q = `select * from courses where course_id = ${req.params.Id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows[0];
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let postCourse = async (req, res) => {
  try {
    let q = "insert into courses values (?,?,?,?)";
    let { course_id, courseName, courseDuration, courseFees } = req.body;
    let values = [course_id, courseName, courseDuration, courseFees];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let putCourse = async (req, res) => {
  try {
    let q = `update courses set course_name=?,  course_duration=?, course_fees=?  where course_id = ${req.params.id}`;
    let { courseName, courseDuration, courseFees } = req.body;
    let values = [courseName, courseDuration, courseFees];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let deleteCourse = async (req, res) => {
  try {
    let q = `delete from courses  where course_id = ${req.params.id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

module.exports = {
  getCourses,
  postCourse,
  putCourse,
  deleteCourse,
  getCourseById,
};
