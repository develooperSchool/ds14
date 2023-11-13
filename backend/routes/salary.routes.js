const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary.controller");

router.get("/", salaryController.getSalaryAnnexure);
router.post("/", salaryController.addSalaryAnnexure);
router.put("/:annexureId", salaryController.updateSalaryAnnexure);
router.delete("/:annexureId", salaryController.deleteSalaryAnnexure);

module.exports = router;
