var services = require("../services/faculty2.services");
const stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const { SUCCESS } = require("../utils/app.constants");

let getFaculty2 = (req, res) => {
  services
    .getFaculty2(req, res)
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

let postFaculty2 = (req, res) => {
  services
    .postFaculty2(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.CREATED, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let putFaculty2 = (req, res) => {
  services
    .putFaculty2(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let deleteFaculty2 = (req, res) => {
  services
    .deleteFaculty2(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getFaculty2,
  getFaculty,
  postFaculty2,
  putFaculty2,
  deleteFaculty2,
};
