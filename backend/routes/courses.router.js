var express = require("express");
var router = express.Router();
var controller = require("../controllers/courses.controller");
const validation = require("../middlewares/validations/courses.validation");

router.get(`/get`, (req, res) => {
  controller.getCourses(req, res);
});

router.get(
  "/getById/:Id",
  validation.getCourseByIdValidation,
  controller.getCourseById
);

router.post(`/post`, validation.postCourseValidation, controller.postCourse);

router.put(`/update/:id`, validation.putCourseValidation, controller.putCourse);

router.delete(
  `/delete/:id`,
  validation.deleteCoursevalidation,
  controller.deleteCourse
);

module.exports = router;
