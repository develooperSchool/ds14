const express = require("express");
const revenueController = require("../controllers/myrevenue.controller");
const revenueValidation = require("../middlewares/validations/myrevenue.validation");
const HttpStatusCode = require("../utils/HttpStatusCode");

const router = express.Router();

router.get("/getAllrevenueCategory", (req, res) => {
  revenueController.getAllRevenueCategory(req, res);
});

router.get(
  "/getRevenueCatById/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.getRevenueCategoryById
);

router.post(
  "/addRevenueCategorydetails",
  revenueValidation.addRevenueValidation,
  revenueController.addRevenueCategory
);

router.delete(
  "/deleteRevenueCategory/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.deleteRevenueCategory
);

router.put(
  "/updateRevenueCatBy/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.updateRevenueCategory
);

router.get("/incomeInfo", (req, res) => {
  revenueController.getAllIncomeInfo(req, res);
});

router.get(
  "/incomeInfoById/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.getIncomeInfoById
);

router.post(
  "/addIncome",
  revenueValidation.addamountValidation,
  revenueController.addIncomeInfo
);

router.put(
  "/updateIncome/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.updateIncomeInfoById
);

router.delete(
  "/deleteIncome/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.deleteIncomeInfoById
);

router.get("/getAllExpense", (req, res) => {
  revenueController.getAllExpenseInfo(req, res);
});

router.get(
  "/getExpenseById/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.getExpenseInfoById
);

router.post(
  "/addExpenseInfo",
  revenueValidation.addamountValidation,
  revenueController.addExpenseInfo
);

router.put(
  "/updateExpense/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.updateExpenseInfoById
);

router.delete(
  "/deleteExpense/:id",
  revenueValidation.revenueByIdValidation,
  revenueController.deleteExpenseInfoById
);

router.all("*", (req, res) => {
  res.status(HttpStatusCode.NOT_FOUND).json("URL NOT FOUND");
});
module.exports = router;
