const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary.controller");
const SalaryAnnexureValidation = require("../middlewares/validations/salaryannexure.validation");

router.get("/", salaryController.getSalaryAnnexure);
router.post(
  "/",
  SalaryAnnexureValidation.addSalaryAnnexureValidation,
  salaryController.addSalaryAnnexure
);
router.put(
  "/:annexureId",
  SalaryAnnexureValidation.addSalaryAnnexureValidation,
  salaryController.updateSalaryAnnexure
);
router.delete("/:annexureId", salaryController.deleteSalaryAnnexure);

module.exports = router;
