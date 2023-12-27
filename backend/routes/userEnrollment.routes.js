var express = require("express");
var router = express.Router();

var userEnrollmentController = require("../controllers/userEnrollment.controller");
const userEnrollmentValidation = require("../middlewares/validations/userEnrollment.validation");
const HttpStatusCode = require("../utils/HttpStatusCode");

router.get("/", (req, res) => {
  userEnrollmentController.getAllUserEnrollment(req, res);
});

router.get(
  "/:id",
  userEnrollmentValidation.getEnrolledUserValidationByID,
  userEnrollmentController.getEnrolledUserById
);
router.post(
  "/enroll",
  userEnrollmentValidation.enrollUserValidation,
  userEnrollmentController.enrollUser
);

router.put(
  "/updateEnroll/:id",
  userEnrollmentValidation.getEnrolledUserValidationByID,
  userEnrollmentController.updateEnrollUserById
);
router.delete(
  "/delete/:id",
  userEnrollmentValidation.getEnrolledUserValidationByID,
  userEnrollmentController.deleteUserEnrollment
);
module.exports = router;
