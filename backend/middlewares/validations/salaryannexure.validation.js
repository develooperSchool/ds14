// const { INVALID_DATE, INVALID_AMOUNT } = require("../../utils/app.constants");
const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");
// const InvalidId = require("../../errors/InvalidIdError");
const InvalidDate = require("../../errors/InvalidDateError");
// const InvalidAmount = require("../../errors/InvalidAmountError");

const addSalaryAnnexureValidation = (req, res, next) => {
  if (utils.isInvalidDate(req.body.annexure_date))
    throw new InvalidDate(
      "GIVEN DATE IS INVALID, PLEASE ENTER VALID DATE",
      res
    );
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT DATE");
  else next();
};

module.exports = {
  addSalaryAnnexureValidation,
};
