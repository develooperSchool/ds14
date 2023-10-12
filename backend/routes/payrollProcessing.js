const express = require("express");
const router = express.Router();
const payrollProcessingController = require("../controllers/payrollProcessingController");
const payrollValidation = require("../middlewares/validations/payroll.validation");

router.get("/", payrollProcessingController.getAllPayrollProcessing);
router.get(
  "/:payroll_id",
  payrollValidation.payrollValidationById,
  payrollProcessingController.getPayrollProcessingById
);

router.post(
  "/",
  payrollValidation.addPayrollValidation,
  payrollValidation.addPayrollAmountValidation,
  payrollProcessingController.addPayrollProcessing
);

router.put(
  "/:payroll_id",
  payrollValidation.addPayrollValidation,
  payrollValidation.addPayrollAmountValidation,
  payrollProcessingController.updatePayrollProcessing
);

router.delete(
  "/:payroll_id",
  payrollValidation.payrollValidationById,
  payrollProcessingController.deletePayrollProcessing
);

module.exports = router;
