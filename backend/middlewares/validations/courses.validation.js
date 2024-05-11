const utils = require("../../utils/app.utils");
const err = require("../../errors/InvalidCoursesError");

const getCourseByIdValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidCourseId("ENTER CORRECT ID", res);
  }
  next();
};

const postCourseValidation = (req, res, next) => {
  const { course_name, course_duration, course_fees } = req.body;

  if (utils.isInvalidName(course_name)) {
    throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME", res);
  }
  if (utils.isInvalidId(course_duration)) {
    throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ", res);
  }
  if (utils.isInvalidId(course_fees)) {
    throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES", res);
  }
  next();
};

const putCourseValidation = (req, res, next) => {
  const { course_name, course_duration, course_fees } = req.body;
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidCourseId("ENTER CORRECT ID", res);
  }
  if (utils.isInvalidName(course_name)) {
    throw new err.InvalidCourseName("ENTER CORRECT COURSE NAME", res);
  }
  if (utils.isInvalidId(course_duration)) {
    throw new err.InvalidCourseDuration("ENTER CORRECT COURSE DURATION ", res);
  }
  if (utils.isInvalidId(course_fees)) {
    throw new err.InvalidCourseFees("ENTER CORRECT COURSE_FEES", res);
  }
  next();
};

const deleteCoursevalidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidCourseId("ENTER CORRECT ID", res);
  }
  next();
};

module.exports = {
  postCourseValidation,
  putCourseValidation,
  deleteCoursevalidation,
  getCourseByIdValidation,
};
