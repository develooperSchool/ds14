const express = require("express");
const router = express.Router();
const salaryInfoController = require("../controllers/salaryInfoController");
const salaryValidation = require("../middlewares/validations/salaryInfo.validation");

router.get("/", salaryInfoController.getAllSalaryInfo);

router.get(
  "/:salary_id",
  salaryValidation.salaryInfoValidationById,
  salaryInfoController.getSalaryInfoById
);
router.post(
  "/",
  salaryValidation.addSalaryInfoValidation,
  salaryValidation.addAmountValidation,
  salaryValidation.addAmountValidation1,
  salaryInfoController.addSalaryInfo
);
router.put(
  "/:salary_id",
  salaryValidation.addSalaryInfoValidation,
  salaryInfoController.updateSalaryInfo
);
router.delete(
  "/:salary_id",
  salaryValidation.salaryInfoValidationById,
  salaryInfoController.deleteSalaryInfo
);

module.exports = router;
