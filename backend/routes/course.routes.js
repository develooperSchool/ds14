const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

const courseCon =
  // api/v1/course
  router.get("/", (req, res) => {
    courseController.getAllCourses(req, res);
  });

// /api/v1/course/1
router.get("/:id", (req, res) => {
  courseController.getCourseById(req, res);
});

// api/v1/course/add
router.post("/add", (req, res) => {
  courseController.addCourse(req, res);
});

router.put("/:id", (req, res) => {
  courseController.updateCourse(req, res);
});
module.exports = router;
