
const salaryInfoDao = require('../dao/salaryInfoDao');

async function getAllSalaryInfo() {
  try {
    const salaryInfo = await salaryInfoDao.getAllSalaryInfo();
    return salaryInfo;
  } catch (error) {
    throw error;
  }
}

async function getSalaryInfoById(salaryId) {
  try {
    const salaryInfo = await salaryInfoDao.getSalaryInfoById(salaryId);
    return salaryInfo;
  } catch (error) {
    throw error;
  }
}


async function addSalaryInfo(newSalaryInfo) {
  try {
    // Validate newSalaryInfo here if needed
    const insertedId = await salaryInfoDao.addSalaryInfo(newSalaryInfo);
    return insertedId;
  } catch (error) {
    throw error;
  }
}



async function updateSalaryInfo(salaryId, updatedData) {
  try {
    // Validate updatedData here if needed
    await salaryInfoDao.updateSalaryInfo(salaryId, updatedData);
  } catch (error) {
    throw error;
  }
}


async function deleteSalaryInfo(salaryId) {
  try {
    await salaryInfoDao.deleteSalaryInfo(salaryId);
  } catch (error) {
    throw error;
  }
}



module.exports = {
  getAllSalaryInfo,
  getSalaryInfoById,
  addSalaryInfo,
  updateSalaryInfo,
  deleteSalaryInfo
};
