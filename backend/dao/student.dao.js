const db = require("../config/db-config");
const SqlError = require("../errors/SqlError")

const getAllStudents = async (req,res) => {
  let row = [];
  try {
    const [rows] = await db.query("SELECT * FROM user_master where role_id=3");
    row = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res)
  }
  return row;
};





module.exports={getAllStudents}