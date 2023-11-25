const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");

async function getSalaryAnnexure(res) {
  try {
    const [rows] = await db.execute("SELECT * FROM salary_annexure");
    return rows;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function getSalaryById(annexureId, res) {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM salary_annexure WHERE annexure_id = ?",
      [annexureId]
    );
    return rows[0];
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function addSalaryAnnexure(salaryData, res) {
  try {
    const [rows] = await db.execute(
      "INSERT INTO salary_annexure (user_id, name, designation, department, job_location, basic, hra, special_allowance, profession_tax, total_deductions, net_salary, annexure_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        salaryData.user_id,
        salaryData.name,
        salaryData.designation,
        salaryData.department,
        salaryData.job_location,
        salaryData.basic,
        salaryData.hra,
        salaryData.special_allowance,
        salaryData.profession_tax,
        salaryData.total_deductions,
        salaryData.net_salary,
        salaryData.annexure_date,
      ]
    );
    return rows.insertId;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function updateSalaryAnnexure(annexureId, salaryData, res) {
  try {
    await db.execute(
      "UPDATE salary_annexure SET user_id=?, name=?, designation=?, department=?, job_location=?, basic=?, hra=?, special_allowance=?, profession_tax=?, total_deductions=?, net_salary=?, annexure_date=? WHERE annexure_id = ?",
      [
        salaryData.user_id,
        salaryData.name,
        salaryData.designation,
        salaryData.department,
        salaryData.job_location,
        salaryData.basic,
        salaryData.hra,
        salaryData.special_allowance,
        salaryData.profession_tax,
        salaryData.total_deductions,
        salaryData.net_salary,
        salaryData.annexure_date,
        annexureId,
      ]
    );
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function deleteSalaryAnnexure(annexureId, res) {
  try {
    await db.execute("DELETE FROM salary_annexure WHERE annexure_id = ?", [
      annexureId,
    ]);
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

module.exports = {
  getSalaryAnnexure,
  getSalaryById,
  addSalaryAnnexure,
  updateSalaryAnnexure,
  deleteSalaryAnnexure,
};
