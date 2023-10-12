const payrollProcessingDao = require("../dao/payrollProcessingDao");

async function getAllPayrollProcessing(res) {
  try {
    const records = await payrollProcessingDao.getAllPayrollProcessing(res);
    return records;
  } catch (error) {
    throw error;
  }
}

async function getPayrollProcessingById(payrollId, res) {
  try {
    const record = await payrollProcessingDao.getPayrollProcessingById(
      payrollId,
      res
    );
    return record;
  } catch (error) {
    throw error;
  }
}

async function addPayrollProcessing(newPayrollRecord, res) {
  try {
    const insertedId = await payrollProcessingDao.addPayrollProcessing(
      newPayrollRecord,
      res
    );
    return insertedId;
  } catch (error) {
    throw error;
  }
}

async function updatePayrollProcessing(payrollId, updatedPayrollRecord, res) {
  try {
    await payrollProcessingDao.updatePayrollProcessing(
      payrollId,
      updatedPayrollRecord,
      res
    );
  } catch (error) {
    throw error;
  }
}

async function deletePayrollProcessing(payrollId, res) {
  try {
    await payrollProcessingDao.deletePayrollProcessing(payrollId, res);
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
