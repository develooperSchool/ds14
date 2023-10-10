const express = require("express");
const revenueController = require("../controllers/myrevenue.controller");
const revenueValidation = require("../middlewares/validations/myrevenue.validation");

const router = express.Router();

router.get("/getAllrevenueCategory", (req, res) => {
  revenueController.getAllRevenueCategory(req, res);
});

router.get(
  "/getRevenueCatById/:id", //validation for id
  revenueValidation.revenueByIdValidation,
  revenueController.getRevenueCategoryById
);

// router.get("/getRevenueCatById/:id", (req, res) => {
//   revenueController.getRevenueCategoryById(req, res);
// });

router.post(
  "/addRevenueCategorydetails",
  revenueValidation.addRevenueValidation, //validation for string
  revenueController.addRevenueCategory
);

router.delete(
  "/deleteRevenueCategory/:id", //validation for id
  revenueValidation.revenueByIdValidation,
  revenueController.deleteRevenueCategory
);

// router.delete("/deleteRevenueCategory/:id", (req, res) => {
//   revenueController.deleteRevenueCategory(req, res);
// });

router.put(
  "/updateRevenueCatBy/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.updateRevenueCategory
);

router.get("/incomeInfo", (req, res) => {
  revenueController.getAllIncomeInfo(req, res);
});

router.get(
  "/incomeInfoById/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.getIncomeInfoById
);

router.post(
  "/addIncome",
  revenueValidation.addamountValidation, //validation for amount
  revenueController.addIncomeInfo
);

router.put(
  "/updateIncome/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.updateIncomeInfoById
);

router.delete(
  "/deleteIncome/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.deleteIncomeInfoById
);

router.get("/getAllExpense", (req, res) => {
  revenueController.getAllExpenseInfo(req, res);
});

router.get(
  "/getExpenseById/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.getExpenseInfoById
);

router.post(
  "/addExpenseInfo",
  revenueValidation.addamountValidation, //validaton for number
  revenueController.addExpenseInfo
);

router.put(
  "/updateExpense/:id",
  revenueValidation.revenueByIdValidation, //validation for id
  revenueController.updateExpenseInfoById
);

router.delete(
  "/deleteExpense/:id",
  revenueValidation.revenueByIdValidation, //validatio for id
  revenueController.deleteExpenseInfoById
);

module.exports = router;
