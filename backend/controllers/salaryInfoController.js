const salaryInfoService = require("../services/salaryInfoService");

async function getAllSalaryInfo(req, res, next) {
  try {
    const salaryInfo = await salaryInfoService.getAllSalaryInfo(res);
    res.json(salaryInfo);
  } catch (error) {
    next(error);
  }
}

async function getSalaryInfoById(req, res, next) {
  try {
    const salaryId = req.params.salary_id;
    const salaryInfo = await salaryInfoService.getSalaryInfoById(salaryId, res);
    res.json(salaryInfo);
  } catch (error) {
    next(error);
  }
}

async function addSalaryInfo(req, res, next) {
  try {
    const newSalaryInfo = req.body;
    const insertedId = await salaryInfoService.addSalaryInfo(
      newSalaryInfo,
      res
    );
    res.status(201).json({
      message: "Salary information added successfully",
      id: insertedId,
    });
  } catch (error) {
    next(error);
  }
}

async function updateSalaryInfo(req, res, next) {
  try {
    const salaryId = req.params.salary_id;
    const updatedSalaryInfo = req.body;
    await salaryInfoService.updateSalaryInfo(salaryId, updatedSalaryInfo, res);
    res.json({ message: "Salary information updated" });
  } catch (error) {
    next(error);
  }
}

async function deleteSalaryInfo(req, res) {
  try {
    const salaryId = req.params.salary_id;
    await salaryInfoService.deleteSalaryInfo(salaryId, res);
    res.json({ message: "Salary information deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllSalaryInfo,
  getSalaryInfoById,
  addSalaryInfo,
  updateSalaryInfo,
  deleteSalaryInfo,
};
