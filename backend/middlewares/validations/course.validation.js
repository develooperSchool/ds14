const utils = require("../../utils/app.utils");

const getCourseByIdValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) res.status(400).send("INVALID ID");
  else next();
};

const addCourseValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) res.status(400).send("INVALID ID");
//   if () {}
//   if () {}
  else next();
};

module.exports = { getCourseByIdValidation, addCourseValidation };
