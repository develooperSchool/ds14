const SalaryDao = require("../dao/salary.dao");

async function getSalaryAnnexure() {
  try {
    const salaryAnnexure = await SalaryDao.getSalaryAnnexure();
    return salaryAnnexure;
  } catch (error) {
    throw error;
  }
}

async function addSalaryAnnexure(salaryData) {
  try {
    const annexureId = await SalaryDao.addSalaryAnnexure(salaryData);
    return annexureId;
  } catch (error) {
    throw error;
  }
}

async function updateSalaryAnnexure(annexureId, salaryData) {
  try {
    await SalaryDao.updateSalaryAnnexure(annexureId, salaryData);
  } catch (error) {
    throw error;
  }
}

async function deleteSalaryAnnexure(annexureId) {
  try {
    await SalaryDao.deleteSalaryAnnexure(annexureId);
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
