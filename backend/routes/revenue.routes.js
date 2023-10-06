// var express = require("express");
// const validation = require("../middlewares/revenue.validation.middleware");
// const controller = require("../controllers/revenue.controller");

// var router = express.Router();

// router.get("/", (req, res) => {
//   controller.getAllRevenueCategories(req, res);
// });

// router.post("/add", (req, res) => {
//   controller.addRevenueCategory(req, res);
// });

// router.use("/delete/:id", (req, res, next) => {
//   validation.deleteRevenueCategoryValidation(req, res, next);
// });

// router.delete("/delete/:id", (req, res) => {
//   controller.deleteRevenueCategory(req, res);
// });

// router.use("/update/:id", (req, res, next) => {
//   validation.udpateRevenueCategoryByIdValidation(req, res, next);
// });

// router.put("/update/:id", (req, res) => {
//   controller.udpateRevenueCategoryById(req, res);
// });

// router.use("/payment", (req, res, next) => {
//   validation.paymentValidation(req, res, next);
// });

// router.post("/payment", (req, res) => {
//   controller.saveIncomePaymentDetails(req, res);
// });

// router.get("/income", (req, res) => {
//   controller.getAllIncomeDetils(req, res);
// });

// router.use("/income/:id", (req, res, next) => {
//   validation.getIncomeDetilsByIdValidation(req, res, next);
// });

// router.get("/income/:id", (req, res) => {
//   controller.getIncomeDetilsById(req, res);
// });

// router.post("/expense", (req, res) => {
//   controller.saveExpensePaymentDetails(req, res);
// });

// router.get("/expenses", (req, res) => {
//   controller.getAllExpenseDetils(req, res);
// });

// router.use("/expense/:id", (req, res, next) => {
//   validation.getExpenseDetilsByIdValidation(req, res, next);
// });

// router.get("/expense/:id", (req, res) => {
//   controller.getExpenseDetilsById(req, res);
// });

// module.exports = router;
