var express = require("express");
var router = express.Router();
var controller = require("../controllers/timetable.controller");
const validation = require("../middlewares/validations/timetable.validaton");

router.get(`/get`, (req, res) => {
  controller.getTime(req, res);
});

router.post(`/post`, validation.postTimeValidation, controller.postTime);

router.put(`/update/:Id`, validation.putTimeValidation, controller.putTime);

router.delete(
  `/delete/:Id`,
  validation.deleteTimeValidation,
  controller.deleteTime
);

module.exports = router;
