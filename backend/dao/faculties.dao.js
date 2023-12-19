let db = require("../config/db-config");
let sqlErr = require("../errors/SqlError");

let getFaculties = async (req, res) => {
  try {
    let q =
      "select * from faculty ,user_master,subjects where faculty.user_id = user_master.user_id and  faculty.sub_id=subjects.sub_id";
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let getFaculty = async (req, res) => {
  try {
    let q = "select * from user_master where role_id=2";
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let postFaculty = async (req, res) => {
  try {
    let q = "insert into faculty values (?,?,?)";
    let { user_id, sub_id, Id } = req.body;
    let values = [sub_id, user_id, Id];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let putFaculty = async (req, res) => {
  try {
    let q = `update faculty set sub_id=?,  user_id=?  where faculty_id = ${req.params.id}`;
    let { sub_id, user_id } = req.body;
    let values = [sub_id, user_id];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

let deleteFaculty = async (req, res) => {
  try {
    let q = `delete from faculty  where sub_id = ${req.params.id}`;
    let values = [];
    let [rows, fields] = await db.query(q, values);
    return rows;
  } catch (err) {
    throw new sqlErr(String(err.sqlMessage).toUpperCase(), res);
  }
};

module.exports = {
  getFaculties,
  getFaculty,
  postFaculty,
  putFaculty,
  deleteFaculty,
};
