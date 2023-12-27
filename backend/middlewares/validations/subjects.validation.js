const utils = require("../../utils/app.utils");
const err = require("../../errors/InvalidSubjectsError");

const postSubjectsValidation = (req, res, next) => {
  const { sub_id, subject, duration, faculty_id, syllabus } = req.body;

  if (utils.isInvalidId(sub_id)) {
    throw new err.InvalidSubjectId("ENTER CORRECT Id", res);
  }
  if (utils.IsInvalidN(subject)) {
    throw new err.InvalidSubject("ENTER CORRECT SUBJECT NAME", res);
  }
  if (utils.IsInvalidNameNum(duration)) {
    throw new err.InvalidDuration("ENTER CORRECT DURATION", res);
  }
  if (utils.isInvalidId(faculty_id)) {
    throw new err.InvalidFacultyId("ENTER CORRECT Id", res);
  }
  if (utils.IsInvalidN(syllabus)) {
    throw new err.InvalidSyllabus("ENTER CORRECT Syllabus link", res);
  }
  next();
};

const putSubjectsValidation = (req, res, next) => {
  const { subject, duration, faculty_id, syllabus } = req.body;

  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidSubjectId("ENTER CORRECT Id", res);
  }
  if (utils.IsInvalidN(subject)) {
    throw new err.Invalidsubject("ENTER CORRECT SUBJECT NAME", res);
  }
  if (utils.IsInvalidNameNum(duration)) {
    throw new err.InvalidDuration("ENTER CORRECT DURATION", res);
  }
  if (utils.isInvalidId(faculty_id)) {
    throw new err.InvalidFacultyId("ENTER CORRECT Id", res);
  }
  if (utils.IsInvalidN(syllabus)) {
    throw new err.InvalidSyllabus("ENTER CORRECT Syllabus link", res);
  }
  next();
};

const deleteSubjectsValidation = (req, res, next) => {
  if (utils.isInvalidId(req.params.id)) {
    throw new err.InvalidSubjectId("ENTER CORRECT Id", res);
  }
  next();
};

module.exports = {
  postSubjectsValidation,
  putSubjectsValidation,
  deleteSubjectsValidation,
};
