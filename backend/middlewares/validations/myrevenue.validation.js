const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");

const revenueByIdValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id))
    res.status(HttpStatusCode.BAD_REQUEST).send("INVALID ID");
  else next();
};

const addRevenueValidation = (req, res, next) => {
  if (utils.isInvalidName(req.params.name))
    res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT NAME");
  else next();
};

const addamountValidation = (req, res, next) => {
  if (utils.isInvalidId(req.body.amount))
    res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT AMOUNT");
  else next();
};

module.exports = {
  revenueByIdValidation,
  addRevenueValidation,
  addamountValidation,
};
