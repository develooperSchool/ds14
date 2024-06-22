var services = require("../services/courses.services");
let stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  SUCCESS,
  COURSE_UPDATED_SUCCESSFULLY,
  NEW_COURSE_CREATED_SUCCESSFULLY,
  COURSE_DELETED_SUCCESSFULLY,
  NOT_FOUND,
} = require("../utils/app.constants");

let getCourses = (req, res) => {
  services
    .getCourses(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let getCourseById = (req, res) => {
  services
    .getCourseById(req, res)
    .then((resp) => {
      typeof resp !== "string"
        ? respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res)
        : respond(NOT_FOUND, stCode.NOT_FOUND, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let postCourse = (req, res) => {
  services
    .postCourse(req, res)
    .then((resp) => {
      respond(
        NEW_COURSE_CREATED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

let putCourse = (req, res) => {
  services
    .putCourse(req, res)
    .then((resp) => {
      respond(
        COURSE_UPDATED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

let deleteCourse = (req, res) => {
  services
    .deleteCourse(req, res)
    .then((resp) => {
      respond(
        COURSE_DELETED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getCourses,
  postCourse,
  putCourse,
  deleteCourse,
  getCourseById,
};
