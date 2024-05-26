const userUtil = require("../../utils/app.utils");
const httpStatusCode = require("../../utils/HttpStatusCode");
const InvalidIdError = require("../../errors/InvalidIdError");
const InvalidNameError = require("../../errors/InvalidNameError");
const InvalidEmailError = require("../../errors/InvalidEmailError");
const InvalidGenderError = require("../../errors/InvalidGenderError");
const InvalidContactError = require("../../errors/InvalidContactError");
const InvalidYearError = require("../../errors/InvalidYearError");
const InvalidDateError = require("../../errors/InvalidDateError");
const InvalidPasswordError = require("../../errors/InvalidPasswordError");
const InvalidQualificationError = require("../../errors/InvalidQualificationError");
const InvalidCasteCategoryError = require("../../errors/InvalidCasteCategoryError");
const InvalidSubcasteError = require("../../errors/InvalidSubcasteError");

const getUserValidationByID = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("USER_ID GIVEN FOR FETCHING USER IS INVALID", res);
  // res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
  else next();
};

const getIsActiveUserValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("ID GIVEN FOR DEACTIVATING USER IS INVALID", res);
  // res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
  else next();
};

const updatetUserRoleValidationByID = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("USER_ID GIVEN FOR UPDATING USER IS INVALID", res);
  // res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
  else next();
};

const deactivateUserValidationByID = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "USER_ID GIVEN FOR DEACTIVATING USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("User Id is invalid")
  else next();
};

const createUserValidation = (req, res, next) => {
  if (userUtil.isInvalidName(req.body.first_name))
    throw new InvalidNameError(
      "FIRST NAME ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid First Name")

  if (userUtil.isInvalidName(req.body.last_name))
    throw new InvalidNameError(
      "LAST NAME ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Last Name")

  if (userUtil.isInvalidEmail(req.body.email))
    throw new InvalidEmailError(
      "EMAIL ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Email")

  if (userUtil.isInValidContact(req.body.contact))
    throw new InvalidContactError(
      "CONTACT NUMBER ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("contact cannot be null or undefined")

  if (userUtil.isInvalidName(req.body.qualification))
    throw new InvalidQualificationError(
      "QUALIFICATION ENTERED BY NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Contact")

  if (userUtil.isInvalidYear(req.body.passing_year))
    throw new InvalidYearError(
      "PASSING YEAR ENTERED FOR NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid Passing Year")

  if (userUtil.isInvalidDate(req.body.dob))
    throw new InvalidDateError(
      "DATE OF BIRTH OF NEW USER IS INVALID" + req.body.dob,
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Date of Birth cannot be null or undefined")

  if (userUtil.isInvalidGender(req.body.gender))
    throw new InvalidGenderError(
      "Gender Entered FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("gender cannot be null or undefined")

  if (userUtil.isInvalidName(req.body.caste_category))
    throw new InvalidCasteCategoryError(
      "CASTE CATEGORY ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid casteCategory")

  if (userUtil.isInvalidName(req.body.sub_caste))
    throw new InvalidSubcasteError(
      "SUBCASTE ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid subcaste");

  if (userUtil.isInvalidPassword(req.body.password))
    throw new InvalidPasswordError(
      "PASSWORD ENTERED BY NEW USER IS INVALID",
      res
    );
  // res.status(httpStatusCode.BAD_REQUEST).send("Please Enter Valid password ")
  else next();
};

module.exports = {
  createUserValidation,
  getUserValidationByID,
  updatetUserRoleValidationByID,
  deactivateUserValidationByID,
  getIsActiveUserValidation,
};
