const utils = require("../../utils/app.utils");
const err = require("../../errors/InvalidFacultyError");

const postFacultyValidation = (req, res, next) => {
  const { sub_id, user_id, faculty_id } = req.body;

  if (utils.isInvalidId(sub_id)) {
    throw new err.InvalidSubId("ENTER CORRECT ID", res);
  }
  if (utils.isInvalidId(user_id)) {
    throw new err.InvalidUserId("ENTER CORRECT ID", res);
  }

  next();
};

const putFacultyValidation = (req, res, next) => {
  const { sub_id, user_id } = req.body;

  if (utils.isInvalidId(sub_id)) {
    throw new err.InvalidSubId("ENTER CORRECT ID", res);
  }
  if (utils.isInvalidId(user_id)) {
    throw new err.InvalidUserId("ENTER CORRECT ID", res);
  }
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidFacId("ENTER CORRECT ID", res);
  }
  next();
};

const deleteFacultyValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidFacId("ENTER CORRECT ID", res);
  }
  next();
};

module.exports = {
  postFacultyValidation,
  putFacultyValidation,
  deleteFacultyValidation,
};
