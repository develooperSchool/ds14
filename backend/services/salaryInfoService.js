const salaryInfoDao = require("../dao/salaryInfoDao");

async function getAllSalaryInfo(res) {
  try {
    const salaryInfo = await salaryInfoDao.getAllSalaryInfo(res);
    return salaryInfo;
  } catch (error) {
    throw error;
  }
}

async function getSalaryInfoById(salaryId, res) {
  try {
    const salaryInfo = await salaryInfoDao.getSalaryInfoById(salaryId, res);
    return salaryInfo;
  } catch (error) {
    throw error;
  }
}

async function addSalaryInfo(newSalaryInfo, res) {
  try {
    // Validate newSalaryInfo here if needed
    const insertedId = await salaryInfoDao.addSalaryInfo(newSalaryInfo, res);
    return insertedId;
  } catch (error) {
    throw error;
  }
}

async function updateSalaryInfo(salaryId, updatedData, res) {
  try {
    // Validate updatedData here if needed
    await salaryInfoDao.updateSalaryInfo(salaryId, updatedData, res);
  } catch (error) {
    throw error;
  }
}

async function deleteSalaryInfo(salaryId, res) {
  try {
    await salaryInfoDao.deleteSalaryInfo(salaryId, res);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSalaryInfo,
  getSalaryInfoById,
  addSalaryInfo,
  updateSalaryInfo,
  deleteSalaryInfo,
};
