var services = require("../services/course2.services");
let stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  SUCCESS,
  COURSE_UPDATED_SUCCESSFULLY,
  NEW_COURSE_CREATED_SUCCESSFULLY,
  COURSE_DELETED_SUCCESSFULLY,
} = require("../utils/app.constants");

let getCourse2 = (req, res) => {
  services
    .getCourse2(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let getCourse2ById = (req, res) => {
  services
    .getCourse2ById(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let postCourse2 = (req, res) => {
  services
    .postCourse2(req, res)
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

let putCourse2 = (req, res) => {
  services
    .putCourse2(req, res)
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

let deleteCourse2 = (req, res) => {
  services
    .deleteCourse2(req, res)
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
  getCourse2,
  postCourse2,
  putCourse2,
  deleteCourse2,
  getCourse2ById,
};
