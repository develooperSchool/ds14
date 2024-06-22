let db = require("../config/db-config");
let SqlError = require("../errors/SqlError");
const { COURSE_NOT_FOUND } = require("../utils/app.constants");

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
    let q = `select * from courses where course_id = ${req.params.id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows.length > 0 ? rows[0] : COURSE_NOT_FOUND;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let postCourse = async (req, res) => {
  try {
    let sql =
      "insert into courses(course_name, course_duration, course_fees) values (?,?,?)";
    let { course_name, course_duration, course_fees } = req.body;
    let values = [course_name, course_duration, course_fees];
    let [rows, fields] = await db.query(sql, values);
    return rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
};

let putCourse = async (req, res) => {
  try {
    let sql = `update courses set course_name=?,  course_duration=?, course_fees=?  where course_id = ${req.params.id}`;
    let { course_name, course_duration, course_fees } = req.body;
    let values = [course_name, course_duration, course_fees];
    let [rows, fields] = await db.query(sql, values);
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
