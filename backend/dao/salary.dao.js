const db = require("../config/db-config");

async function getSalaryAnnexure() {
  try {
    const [rows] = await db.execute("SELECT * FROM salary_annexure");
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addSalaryAnnexure(salaryData) {
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
    throw error;
  }
}

async function updateSalaryAnnexure(annexureId, salaryData) {
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
    throw error;
  }
}

async function deleteSalaryAnnexure(annexureId) {
  try {
    await db.execute("DELETE FROM salary_annexure WHERE annexure_id = ?", [
      annexureId,
    ]);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getSalaryAnnexure,
  addSalaryAnnexure,
  updateSalaryAnnexure,
  deleteSalaryAnnexure,
};
