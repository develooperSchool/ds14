const utils = require("../../utils/app.utils");
const HttpStatusCode = require("../../utils/HttpStatusCode");
const InvalidId = require("../../errors/InvalidIdError");
const InvalidDate = require("../../errors/InvalidDate");

const attendanceValidationById = (req, res, next) => {
  if (utils.isInvalidId(req.params.attendance_id))
    throw new InvalidId("GIVEN ID IS INVALID, PLEASE ENTER CORRECT ID", res);
  // res.status(HttpStatusCode.BAD_REQUEST).send("INVALID ID");
  else next();
};

const addAttendaceValidation = (req, res, next) => {
  if (utils.isInvalidDate(req.body.attendance_date))
    throw new InvalidDate(
      "GIVEN DATE IS INVALID, PLEASE ENTER VALID DATE",
      res
    );
  // res.status(HttpStatusCode.BAD_REQUEST).send("PLEASE ENTER CORRECT DATE");
  else next();
};

module.exports = {
  attendanceValidationById,
  addAttendaceValidation,
};
