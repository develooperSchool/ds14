const courseDao = require("../dao/course.dao");

const getAllCourses = async () => {
  let rows = [];
  await courseDao
    .getAllCourses()
    .then((result) => {
      rows = result;
    })
    .catch((error) => {
      console.log(error);
    });
  return rows;
};

const getCourseById = async (courseId) => {
  let row = [];
  await courseDao
    .getCourseById(courseId)
    .then((response) => {
      row = response;
    })
    .catch((error) => {
      console.log(error);
    });
  return row;
};

const addCourse = async (body) => {
  let res = "";
  await courseDao
    .addCourse(body)
    .then((result) => (res = result))
    .catch((error) => (res = error));

  return res;
};

const updateCourse = async (id, body) => {
  let res = "";
  await courseDao
    .updateCourse(id, body)
    .then((result) => (res = result))
    .catch((error) => (res = error));

  return res;
};

module.exports = { getAllCourses, getCourseById, addCourse, updateCourse };
