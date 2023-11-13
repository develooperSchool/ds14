const salaryService = require("../services/salary.service");

async function getSalaryAnnexure(req, res) {
  try {
    const salaryAnnexure = await salaryService.getSalaryAnnexure();
    if (salaryAnnexure) {
      res.status(200).json(salaryAnnexure);
    } else {
      res.status(404).json({ message: "Salary annexure not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addSalaryAnnexure(req, res) {
  try {
    const salaryData = req.body;
    const annexureId = await salaryService.addSalaryAnnexure(salaryData);
    res.status(201).json({ message: "Salary annexure created", annexureId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSalaryAnnexure(req, res) {
  try {
    const annexureId = req.params.annexureId;
    const salaryData = req.body;
    await salaryService.updateSalaryAnnexure(annexureId, salaryData);
    res.status(200).json({ message: "Salary annexure updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteSalaryAnnexure(req, res) {
  try {
    const annexureId = req.params.annexureId;
    await salaryService.deleteSalaryAnnexure(annexureId);
    res.status(200).json({ message: "Salary Annexure Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getSalaryAnnexure,
  addSalaryAnnexure,
  updateSalaryAnnexure,
  deleteSalaryAnnexure,
};
