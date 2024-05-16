const guestService = require("../services/guest.service");
const HttpStatusCode = require("../utils/HttpStatusCode");
const { SUCCESS } = require("../utils/app.constants");
const { respond } = require("../utils/app.utils");

const getAllGuests = async (req, res) => {
  await guestService
    .getAllGuests(req, res)
    .then((result) => {
      respond(SUCCESS, HttpStatusCode.OK, result, new Date(Date.now()), res);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllGuests };
