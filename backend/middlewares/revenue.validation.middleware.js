const util = require("../utils/revenue.utils");
const {
  INVALID_ID,
  INVALID_USER_ID,
  INVALID_REVENUE_CATEGORY_ID,
  INVALID_STUDENT_ID,
  AMOUNT_CANNOT_BE_ZERO,
} = require("../utils/revenue.contants");

const deleteRevenueCategoryValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
};

const udpateRevenueCategoryByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
};

const paymentValidation = (req, res, next) => {
  if (
    util.isNullOrUndefined(req.body.userId) ||
    util.isInvalidId(req.body.userId)
  ) {
    res.status(400).send(INVALID_USER_ID);
  }

  if (util.isInvalidId(req.body.revenueCategoryId)) {
    res.status(400).send(INVALID_REVENUE_CATEGORY_ID);
  }

  if (
    req.body.revenueCategoryId === 1 ||
    req.body.revenueCategoryId === 2 ||
    req.body.revenueCategoryId === 3 ||
    req.body.revenueCategoryId === 4
  ) {
    if (
      util.isNullOrUndefined(req.body.studentId) ||
      util.isInvalidId(req.body.studentId)
    ) {
      res.status(400).send(INVALID_STUDENT_ID);
    }
  }

  if (req.body.revenueCategoryId === 1) {
    if (
      util.isNullOrUndefined(req.body.totalFees) ||
      util.isNullOrUndefined(req.body.paidFees) ||
      util.isNullOrUndefined(req.body.balanceFees)
    ) {
      res.status(400).send(INVALID_FEE_DETAILS);
    }
  }

  if (util.isInvalidAmount(req.body.amount)) {
    res.status(400).send(AMOUNT_CANNOT_BE_ZERO);
  }

  next();
};

const getIncomeDetilsByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
};

const getExpenseDetilsByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
};

module.exports = {
  deleteRevenueCategoryValidation,
  udpateRevenueCategoryByIdValidation,
  paymentValidation,
  getIncomeDetilsByIdValidation,
  getExpenseDetilsByIdValidation,
};
