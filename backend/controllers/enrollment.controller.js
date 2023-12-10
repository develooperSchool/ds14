var services = require("../services/enrollment.services");
const stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  ENROLLMENT_DELETED_SUCCESSFULLY,
  SUCCESS,
  COURSE_ENROLLED_SUCCESSFULLY,
  ENROLLMENT_UPDATED_SUCCESSFULLY,
} = require("../utils/app.constants");

let getEnrollment = (req, res) => {
  services
    .getEnrollment(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let getEnrollmentData = (req, res) => {
  services
    .getEnrollmentData(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let getEnrollmentDataById = (req, res) => {
  services
    .getEnrollmentDataById(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let postEnrollment = (req, res) => {
  services
    .postEnrollment(req, res)
    .then((resp) => {
      respond(
        COURSE_ENROLLED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

let putEnrollment = (req, res) => {
  services
    .putEnrollment(req, res)
    .then((resp) => {
      respond(
        ENROLLMENT_UPDATED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

let deleteEnrollment = (req, res) => {
  services
    .deleteEnrollment(req, res)
    .then((resp) => {
      respond(
        ENROLLMENT_DELETED_SUCCESSFULLY,
        stCode.OK,
        resp,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getEnrollmentDataById,
  getEnrollment,
  getEnrollmentData,
  postEnrollment,
  putEnrollment,
  deleteEnrollment,
};
