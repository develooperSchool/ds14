var express = require("express");
var router = express.Router();
var controller = require("../controllers/subjects.controller");
const validation = require("../middlewares/validations/subjects.validation");

router.get(`/get`, (req, res) => {
  controller.getSubjects(req, res);
});

router.post(
  `/post`,
  validation.postSubjectsValidation,
  controller.postSubjects
);

router.put(
  `/update/:id`,
  validation.putSubjectsValidation,
  controller.putSubjects
);

router.delete(
  `/delete/:id`,
  validation.deleteSubjectsValidation,
  controller.deleteSubjects
);

module.exports = router;
