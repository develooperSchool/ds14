var express = require("express");
var router = express.Router();
var controller = require("../controllers/enrollment.controller");
const validation = require("../middlewares/validations/enrollment.validation");

router.get(`/get`, (req, res) => {
  controller.getEnrollment(req, res);
});

router.get(`/getData`, (req, res) => {
  controller.getEnrollmentData(req, res);
});

router.get(`/getDataById/:Id`, (req, res) => {
  controller.getEnrollmentDataById(req, res);
});

router.post(
  `/post`,
  validation.postEnrollmentValidation,
  controller.postEnrollment
);

router.put(
  `/update/:id`,
  validation.putEnrollmentValidation,
  controller.putEnrollment
);

router.delete(
  `/delete/:id`,
  validation.deleteEnrollmentValidation,
  controller.deleteEnrollment
);

module.exports = router;
