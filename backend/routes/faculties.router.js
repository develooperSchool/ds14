var express = require("express");
var router = express.Router();
var controller = require("../controllers/faculties.controller");
const validation = require("../middlewares/validations/faculty.validation");

router.get(`/get`, (req, res) => {
  controller.getFaculties(req, res);
});

router.get(`/getFaculty`, (req, res) => {
  controller.getFaculty(req, res);
});

router.post(`/post`, validation.postFacultyValidation, controller.postFaculty);

router.put(
  `/update/:id`,
  validation.putFacultyValidation,
  controller.putFaculty
);

router.delete(
  `/delete/:id`,
  validation.deleteFacultyValidation,
  controller.deleteFaculty
);

module.exports = router;
