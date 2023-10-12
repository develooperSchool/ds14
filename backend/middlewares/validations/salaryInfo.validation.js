// const { INVALID_DATE, INVALID_AMOUNT } = require("../../utils/app.constants");
const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");
const InvalidId = require("../../errors/InvalidIdError");
const InvalidDate = require("../../errors/InvalidDateError");
const InvalidAmount = require("../../errors/InvalidAmountError");

const salaryInfoValidationById = (req, res, next) => {
  if (utils.isInvalidId(req.params.salary_id))
    throw new InvalidId("GIVEN ID IS INVALID, PLEASE ENTER CORRECT ID", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("INVALID ID");
  else next();
};

const addSalaryInfoValidation = (req, res, next) => {
  if (utils.isInvalidDate(req.body.effective_date))
    throw new InvalidDate(
      "GIVEN DATE IS INVALID, PLEASE ENTER VALID DATE",
      res
    );
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT DATE");
  else next();
};

const addAmountValidation = (req, res, next) => {
  if (utils.isInvalidId(req.body.base_salary))
    throw new InvalidAmount("PLEASE ENTER VALID AMOUNT", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT AMOUNT");
  else next();
};

const addAmountValidation1 = (req, res, next) => {
  if (utils.isInvalidId(req.body.other_components))
    throw new InvalidAmount("PLEASE ENTER VALID AMOUNT", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT AMOUNT");
  else next();
};

module.exports = {
  salaryInfoValidationById,
  addSalaryInfoValidation,
  addAmountValidation1,
  addAmountValidation,
};
