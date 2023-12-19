var services = require("../services/faculties.services");
const stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const { SUCCESS } = require("../utils/app.constants");

let getFaculties = (req, res) => {
  services
    .getFaculties(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let getFaculty = (req, res) => {
  services
    .getFaculty(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let postFaculty = (req, res) => {
  services
    .postFaculty(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.CREATED, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let putFaculty = (req, res) => {
  services
    .putFaculty(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let deleteFaculty = (req, res) => {
  services
    .deleteFaculty(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getFaculties,
  getFaculty,
  postFaculty,
  putFaculty,
  deleteFaculty,
};
