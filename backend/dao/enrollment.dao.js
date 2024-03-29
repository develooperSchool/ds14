let db = require("../config/db-config");
let sqlErr = require("../errors/SqlError");

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
    let q = `select * from student_enrollment,courses where student_enrollment.user_id=${req.params.Id} and student_enrollment.course_id=courses.course_id`;
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
    let T = new Date().getTime();
    let S = new Date().getSeconds();
    let unique_id = T + S;

    let q = "insert into student_enrollment values (?,?,?)";
    let { user_id, course_id } = req.body;
    let values = [unique_id, user_id, course_id];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let putEnrollment = async (req, res) => {
  try {
    let q = `update student_enrollment set user_id=?, course_id=?  where unique_id = ${req.params.id}`;
    let { user_id, course_id } = req.body;
    let values = [user_id, course_id];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let deleteEnrollment = async (req, res) => {
  try {
    let q = `delete from student_enrollment  where unique_id = ${req.params.id}`;
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
};
