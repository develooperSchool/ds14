var dao = require("../dao/courses.dao");

let getCourses = async (req, res) => {
  let rows = [];
  await dao
    .getCourses(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let getCourseById = async (req, res) => {
  let rows = [];
  await dao
    .getCourseById(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let postCourse = async (req, res) => {
  let rows;
  await dao
    .postCourse(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let putCourse = async (req, res) => {
  let rows;
  await dao
    .putCourse(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let deleteCourse = async (req, res) => {
  let rows;
  await dao
    .deleteCourse(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = {
  getCourses,
  postCourse,
  putCourse,
  deleteCourse,
  getCourseById,
};
