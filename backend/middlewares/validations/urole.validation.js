const utils = require("../../utils/app.utils");
const httpStatusCode = require("../../utils/HttpStatusCode");
const InvalidId = require("../../errors/InvalidIdError");
const InvalidNameError = require("../../errors/InvalidNameError");
const InvalidEmailError = require("../../errors/InvalidEmailError")
const InvalidPasswordError = require("../../errors/InvalidPasswordError")

const { INVALID_ID, INVALID_NAME } = require("../../utils/app.constants");

const getRoleByIdValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id))
    throw new InvalidId("ENTERED ID IS INVALIED,PLEASE ENTER CORRECT ID", res);
  //res.status(200).send("INVALID ID");
  else next();
};

const addRoleValidation = (req, res, next) => {
  const { name } = req.body;
  if (utils.isInvalidName(name))
    throw new InvalidNameError("INVALID NAME, PLEASE ENTERED VALID NAME", res);
  //res.status(500).send("PLEASE ENTER CORRECT NAME");
  else next();
};

const userLoginValidation = (req, res, next) => {
  if (utils.isInvalidEmail(req.body.username))
  throw new InvalidEmailError("INVALID USERNAME,PLEASE ENTERD VALID USERNAME",res)
    // res.status(500).send("INVALID USERNAME");
  if (utils.isInvalidPassword(req.body.password))
throw new InvalidPasswordError("INVALID PASSWORD,PLEASE ENTER CORRECT PASSWORD",res)
    // res.status(500).send("INVALID PASSWORD");
  next();
};

module.exports = {
  getRoleByIdValidation,
  addRoleValidation,
  userLoginValidation,

};
