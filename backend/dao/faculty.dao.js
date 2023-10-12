const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");

const getAllFaculties = async (req, res) => {
  let result = [];
  let values = [];
  try {
    let sqlQuery = "SELECT * FROM user_master where role_id=2";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
  return result;
};

module.exports = { getAllFaculties };
