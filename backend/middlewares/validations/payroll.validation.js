const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");
const InvalidId = require("../../errors/InvalidIdError");
const InvalidDate = require("../../errors/InvalidDateError");
const InvalidAmount = require("../../errors/InvalidAmountError");

const payrollValidationById = (req, res, next) => {
  if (utils.isInvalidId(req.params.payroll_id))
    throw new InvalidId("GIVEN ID IS INVALID, PLEASE ENTER CORRECT ID", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("INVALID ID");
  else next();
};

const addPayrollValidation = (req, res, next) => {
  if (utils.isInvalidDate(req.body.payroll_date))
    throw new InvalidDate(
      "GIVEN DATE IS INVALID, PLEASE ENTER VALID DATE",
      res
    );
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT DATE");
  else next();
};

const addPayrollAmountValidation = (req, res, next) => {
  if (utils.isInvalidId(req.body.gross_salary))
    throw new InvalidAmount("PLEASE ENTER VALID AMOUNT", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT AMOUNT");
  else next();
};

module.exports = {
  payrollValidationById,
  addPayrollValidation,
  addPayrollAmountValidation,
};
