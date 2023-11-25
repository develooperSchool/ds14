const salaryService = require("../services/salary.service");
const HttpStatusCode = require("../utils/HttpStatusCode");

async function getSalaryAnnexure(req, res) {
  try {
    const salaryAnnexure = await salaryService.getSalaryAnnexure();
    if (salaryAnnexure) {
      res.status(HttpStatusCode.OK).json(salaryAnnexure);
    } else {
      res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ message: "Salary annexure not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSalaryById(req, res, next) {
  try {
    const salaryData = req.params.annexureId;
    const salaryAnnexure = await salaryService.getSalaryById(salaryData, res);
    res.status(HttpStatusCode.OK).json(salaryAnnexure);
  } catch (error) {
    next(error);
  }
}

async function addSalaryAnnexure(req, res) {
  try {
    const salaryData = req.body;
    const annexureId = await salaryService.addSalaryAnnexure(salaryData);
    res
      .status(HttpStatusCode.CREATED)
      .json({ message: "Salary annexure created", annexureId });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
}

async function updateSalaryAnnexure(req, res) {
  try {
    const annexureId = req.params.annexureId;
    const salaryData = req.body;
    await salaryService.updateSalaryAnnexure(annexureId, salaryData);
    res.status(HttpStatusCode.OK).json({ message: "Salary annexure updated" });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
}

async function deleteSalaryAnnexure(req, res) {
  try {
    const annexureId = req.params.annexureId;
    await salaryService.deleteSalaryAnnexure(annexureId);
    res.status(HttpStatusCode.OK).json({ message: "Salary Annexure Deleted" });
  } catch (error) {
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
}

module.exports = {
  getSalaryAnnexure,
  getSalaryById,
  addSalaryAnnexure,
  updateSalaryAnnexure,
  deleteSalaryAnnexure,
};
