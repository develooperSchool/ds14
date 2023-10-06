const pool = require('../config/db-config');

async function getAllPayrollProcessing() {
  try {
    const [rows] = await pool.execute('SELECT * FROM payroll_processing');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getPayrollProcessingById(payrollId) {
  try {
    const [rows] = await pool.execute('SELECT * FROM payroll_processing WHERE payroll_id = ?', [payrollId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function addPayrollProcessing(newPayrollRecord) {
  try {
    const [result] = await pool.execute('INSERT INTO payroll_processing (user_id, payroll_date, gross_salary, net_salary) VALUES (?, ?, ?, ?)', [newPayrollRecord.user_id, newPayrollRecord.payroll_date, newPayrollRecord.gross_salary, newPayrollRecord.net_salary]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

async function updatePayrollProcessing(payrollId, updatedPayrollRecord) {
  try {
    await pool.execute('UPDATE payroll_processing SET user_id = ?, payroll_date = ?, gross_salary = ?, net_salary = ? WHERE payroll_id = ?', [updatedPayrollRecord.user_id, updatedPayrollRecord.payroll_date, updatedPayrollRecord.gross_salary, updatedPayrollRecord.net_salary, payrollId]);
  } catch (error) {
    throw error;
  }
}

async function deletePayrollProcessing(payrollId) {
  try {
    await pool.execute('DELETE FROM payroll_processing WHERE payroll_id = ?', [payrollId]);
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getAllPayrollProcessing,
  getPayrollProcessingById,
  addPayrollProcessing,
  updatePayrollProcessing,
  deletePayrollProcessing,
};
