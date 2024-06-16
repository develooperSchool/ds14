const utils = require("../../utils/app.utils");
const err = require("../../errors/InvalidEnrollmentError");

const getEnrollmentDataById = (req, res, next) => {
  if (utils.isInvalidId(req.body.user_id)) {
    throw new err.InvalidUserId("ENTER CORRECT USER ID", res);
  }
  if (utils.isInvalidId(req.body.course_id)) {
    throw new err.InvalidCourseId("ENTER CORRECT COURESE ID", res);
  }
  next();
};

const postEnrollmentValidation = (req, res, next) => {
  const { user_id, course_id } = req.body;

  if (utils.isInvalidId(user_id)) {
    throw new err.InvalidUserId("ENTER CORRECT USER ID", res);
  }
  if (utils.isInvalidId(course_id)) {
    throw new err.InvalidCourseId("ENTER CORRECT COURSE ID", res);
  }
  next();
};

const putEnrollmentValidation = (req, res, next) => {
  const { user_id, course_id } = req.body;

  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidUniqueId("ENTER CORRECT USER ID", res);
  }
  if (utils.isInvalidId(user_id)) {
    throw new err.InvalidUserId("ENTER CORRECT USER ID", res);
  }
  if (utils.isInvalidId(course_id)) {
    throw new err.InvalidCourseId("ENTER CORRECT COURSE ID", res);
  }
  next();
};

const deleteEnrollmentValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidUniqueId("ENTER CORRECT ID", res);
  }
  next();
};

module.exports = {
  getEnrollmentDataById,
  postEnrollmentValidation,
  putEnrollmentValidation,
  deleteEnrollmentValidation,
};
