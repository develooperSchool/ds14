const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const courseValidation = require("../middlewares/validations/course.validation");
const { valid } = require("@hapi/joi");
// api/v1/course/byName?name=FRONTEND                 -- QUERY PARAM   - req.query.name
// api/v1/course/:name --> api/v1/course/FRONTEND     -- PATH VARIABLE - req.params.name
//
const courseCon =
  // api/v1/course/
  router.get("/", (req, res) => {
    courseController.getAllCourses(req, res);
  });

// /api/v1/course/1
router.get(
  "/:id",
  courseValidation.getCourseByIdValidation,
  courseController.getCourseById
);

// api/v1/course/add
router.post(
  "/add",
  courseValidation.addCourseValidation,
  courseController.addCourse
);

router.put("/:id", (req, res) => {
  courseController.updateCourse(req, res);
});
module.exports = router;
