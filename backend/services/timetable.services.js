var dao = require("../dao/timetable.dao");

let getTime = async (req, res) => {
  let rows;
  await dao
    .getTime(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let postTime = async (req, res) => {
  let rows;
  await dao
    .postTime(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let putTime = async (req, res) => {
  let rows;
  await dao
    .putTime(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let deleteTime = async (req, res) => {
  let rows;
  await dao
    .deleteTime(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = { getTime, postTime, putTime, deleteTime };
