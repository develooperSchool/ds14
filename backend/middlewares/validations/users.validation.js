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
  else next();
};

const getIsActiveUserValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("ID GIVEN FOR DEACTIVATING USER IS INVALID", res);
  else next();
};

const updatetUserRoleValidationByID = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("USER ID GIVEN FOR UPDATING USER IS INVALID", res);
  if (userUtil.isInvalidId(req.body.role_id))
    throw new InvalidIdError("ROLE ID GIVEN FOR UPDATING USER IS INVALID", res);
  else next();
};

const deactivateUserValidationByID = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "USER_ID GIVEN FOR DEACTIVATING USER IS INVALID",
      res
    );
  else next();
};

const createUserValidation = (req, res, next) => {
  if (userUtil.isInvalidName(req.body.first_name))
    throw new InvalidNameError(
      "FIRST NAME ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidName(req.body.last_name))
    throw new InvalidNameError(
      "LAST NAME ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidEmail(req.body.email))
    throw new InvalidEmailError(
      "EMAIL ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInValidContact(req.body.contact))
    throw new InvalidContactError(
      "CONTACT NUMBER ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidName(req.body.qualification))
    throw new InvalidQualificationError(
      "QUALIFICATION ENTERED BY NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidYear(req.body.passing_year))
    throw new InvalidYearError(
      "PASSING YEAR ENTERED FOR NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidDate(req.body.dob))
    throw new InvalidDateError(
      "DATE OF BIRTH OF NEW USER IS INVALID" + req.body.dob,
      res
    );

  if (userUtil.isInvalidGender(req.body.gender))
    throw new InvalidGenderError(
      "Gender Entered FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidName(req.body.caste_category))
    throw new InvalidCasteCategoryError(
      "CASTE CATEGORY ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidName(req.body.sub_caste))
    throw new InvalidSubcasteError(
      "SUBCASTE ENTERED FOR CREATING NEW USER IS INVALID",
      res
    );

  if (userUtil.isInvalidPassword(req.body.password))
    throw new InvalidPasswordError(
      "PASSWORD ENTERED BY NEW USER IS INVALID",
      res
    );
  else next();
};

module.exports = {
  createUserValidation,
  getUserValidationByID,
  updatetUserRoleValidationByID,
  deactivateUserValidationByID,
  getIsActiveUserValidation,
};
