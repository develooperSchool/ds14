const db = require("../config/db-config");

const getAllStudents = async () => {
  let row = [];
  try {
    const [rows] = await db.query("SELECT * FROM user_master where role_id=3");
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};





module.exports={getAllStudents}