const { func } = require("@hapi/joi");
const pool = require("../config/db-config");
const SqlError = require("../errors/SqlError");

async function getAllSalaryInfo(res) {
  try {
    const sql = "SELECT * FROM salary_info";
    const [rows] = await pool.execute(sql);
    return rows;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function getSalaryInfoById(salaryId, res) {
  try {
    const sql = "SELECT * FROM salary_info WHERE salary_id = ?";
    const [rows] = await pool.execute(sql, [salaryId]);
    return rows[0];
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function addSalaryInfo(newSalaryInfo, res) {
  try {
    const sql =
      "INSERT INTO salary_info (user_id, effective_date, base_salary, other_components, total_Salary) VALUES (?, ?, ?, ?, ?)";
    const {
      user_id,
      effective_date,
      base_salary,
      other_components,
      total_Salary,
    } = newSalaryInfo;
    const [result] = await pool.execute(sql, [
      user_id,
      effective_date,
      base_salary,
      other_components,
      total_Salary,
    ]);
    return result.insertId;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function updateSalaryInfo(salaryId, updatedSalaryInfo, res) {
  try {
    await pool.execute(
      "UPDATE salary_info SET effective_date = ?, base_salary = ?, other_components = ?, total_salary = ? WHERE salary_id = ?",
      [
        updatedSalaryInfo.effective_date,
        updatedSalaryInfo.base_salary,
        updatedSalaryInfo.other_components,
        updatedSalaryInfo.total_salary,
        salaryId,
      ]
    );
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function deleteSalaryInfo(salaryId, res) {
  try {
    const sql = "DELETE FROM salary_info WHERE salary_id = ?";
    await pool.execute(sql, [salaryId]);
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

module.exports = {
  getAllSalaryInfo,
  getSalaryInfoById,
  addSalaryInfo,
  updateSalaryInfo,
  deleteSalaryInfo,
};
