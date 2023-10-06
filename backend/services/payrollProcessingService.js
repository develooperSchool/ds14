const payrollProcessingDao = require('../dao/payrollProcessingDao');

async function getAllPayrollProcessing() {
  try {
    const records = await payrollProcessingDao.getAllPayrollProcessing();
    return records;
  } catch (error) {
    throw error;
  }
}

async function getPayrollProcessingById(payrollId) {
  try {
    const record = await payrollProcessingDao.getPayrollProcessingById(payrollId);
    return record;
  } catch (error) {
    throw error;
  }
}

async function addPayrollProcessing(newPayrollRecord) {
  try {
    const insertedId = await payrollProcessingDao.addPayrollProcessing(newPayrollRecord);
    return insertedId;
  } catch (error) {
    throw error;
  }
}

async function updatePayrollProcessing(payrollId, updatedPayrollRecord) {
  try {
    await payrollProcessingDao.updatePayrollProcessing(payrollId, updatedPayrollRecord);
  } catch (error) {
    throw error;
  }
}

async function deletePayrollProcessing(payrollId) {
  try {
    await payrollProcessingDao.deletePayrollProcessing(payrollId);
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
