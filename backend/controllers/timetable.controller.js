var services = require("../services/timetable.services");
const stCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const { SUCCESS } = require("../utils/app.constants");

let getTime = (req, res) => {
  services
    .getTime(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.OK, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let postTime = (req, res) => {
  services
    .postTime(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.CREATED, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let putTime = (req, res) => {
  services
    .putTime(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.Ok, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

let deleteTime = (req, res) => {
  services
    .deleteTime(req, res)
    .then((resp) => {
      respond(SUCCESS, stCode.Ok, resp, new Date(Date.now()), res);
    })
    .catch((err) => console.log(err));
};

module.exports = { getTime, postTime, putTime, deleteTime };
