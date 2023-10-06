const courseService = require("../services/course.service");

const getAllCourses = async (req, res) => {
  await courseService
    .getAllCourses()
    .then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getCourseById = async (req, res) => {
  await courseService
    .getCourseById(req.params.id)
    .then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addCourse = async (req, res) => {
  await courseService
    .addCourse(req.body)
    .then((result) => res.status(201).send(result))
    .catch((error) => res.status(500).send(error));
};

const updateCourse = async (req, res) => {
  await courseService
    .updateCourse(req.params.id, req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};
module.exports = { getAllCourses, getCourseById, addCourse, updateCourse };
