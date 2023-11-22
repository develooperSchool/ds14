const InvalidId = require("../../errors/InvalidIdError");
const InvalidNameError = require("../../errors/InvalidNameError");
const InvalidAmountError = require("../../errors/InvalidAmountError");
const { INVALID_NAME, INVALID_AMOUNT } = require("../../utils/app.constants");
const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");

const revenueByIdValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id))
    throw new InvalidId("GIVEN ID IS INVALID, PLEASE ENTER CORRECT ID", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("INVALID ID");
  else next();
};

const addRevenueValidation = (req, res, next) => {
  if (utils.isInvalidName(req.body.revenueCategoryName))
    throw new InvalidNameError("PLEASE ENTER CORRECT NAME", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT NAME");
  else next();
};

const addamountValidation = (req, res, next) => {
  if (utils.isInvalidId(req.body.incomeAmount))
    throw new InvalidAmountError("PLEASE ENTER CORRECT AMOUNT", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT AMOUNT");
  else next();
};

module.exports = {
  revenueByIdValidation,
  addRevenueValidation,
  addamountValidation,
};
