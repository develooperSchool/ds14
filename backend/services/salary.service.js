const SalaryDao = require("../dao/salary.dao");

async function getSalaryAnnexure(res) {
  try {
    const salaryAnnexure = await SalaryDao.getSalaryAnnexure(res);
    return salaryAnnexure;
  } catch (error) {
    throw error;
  }
}

async function getSalaryById(annexureId, res) {
  try {
    const salaryAnnexure = await SalaryDao.getSalaryById(annexureId, res);
    return salaryAnnexure;
  } catch (error) {
    throw error;
  }
}

async function addSalaryAnnexure(salaryData, res) {
  try {
    const annexureId = await SalaryDao.addSalaryAnnexure(salaryData, res);
    return annexureId;
  } catch (error) {
    throw error;
  }
}

async function updateSalaryAnnexure(annexureId, salaryData, res) {
  try {
    await SalaryDao.updateSalaryAnnexure(annexureId, salaryData, res);
  } catch (error) {
    throw error;
  }
}

async function deleteSalaryAnnexure(annexureId, res) {
  try {
    await SalaryDao.deleteSalaryAnnexure(annexureId, res);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getSalaryAnnexure,
  getSalaryById,
  addSalaryAnnexure,
  updateSalaryAnnexure,
  deleteSalaryAnnexure,
};
