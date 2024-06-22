let db = require("../config/db-config");
let sqlErr = require("../errors/SqlError");
const {
  USER_HAS_ALREADY_ENROLLED,
  USER_HAS_NOT_ENROLLED_YET,
} = require("../utils/app.constants");

let getEnrollment = async (req, res) => {
  try {
    let q =
      "select * from student_enrollment,courses,user_master where student_enrollment.user_id=user_master.user_id and student_enrollment.course_id=courses.course_id";
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let getEnrollmentDataById = async (req, res) => {
  try {
    let message = USER_HAS_NOT_ENROLLED_YET;
    let q = `select * from student_enrollment s where s.user_id=${req.body.user_id} and s.course_id=${req.body.course_id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    if (rows.length > 0) message = USER_HAS_ALREADY_ENROLLED;
    return message;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let getEnrolledCoursesByStudentId = async (req, res) => {
  try {
    let q = `select * from student_enrollment s, courses c where s.user_id=${req.params.id} and s.course_id=c.course_id;`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let getEnrollmentData = async (req, res) => {
  try {
    let q =
      "select * from student_enrollment,user_master,courses where student_enrollment.user_id=user_master.user_id and student_enrollment.course_id=courses.course_id";
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let postEnrollment = async (req, res) => {
  try {
    let q = "insert into student_enrollment (user_id, course_id) values (?,?)";
    let { user_id, course_id } = req.body;
    let values = [user_id, course_id];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let putEnrollment = async (req, res) => {
  try {
    let sql = `update student_enrollment set course_id=? where user_id=?`;
    let { user_id, course_id } = req.body;
    let values = [user_id, course_id];
    let [rows, fields] = await db.query(sql, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let deleteEnrollment = async (req, res) => {
  try {
    let q = `delete from student_enrollment where user_id = ${req.params.id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

module.exports = {
  getEnrollmentDataById,
  getEnrollmentDataById,
  getEnrollment,
  getEnrollmentData,
  postEnrollment,
  putEnrollment,
  deleteEnrollment,
  getEnrolledCoursesByStudentId,
};
