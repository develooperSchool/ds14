const express = require("express");
const router = express.Router();
const attendanceRecordsController = require("../controllers/attendanceRecordsController");
const attendaceValidation = require("../middlewares/validations/attendance.validation");

router.get("/", attendanceRecordsController.getAllAttendanceRecords);
router.get(
  "/:attendance_id",
  attendaceValidation.attendanceValidationById,
  attendanceRecordsController.getAttendanceRecordById
);

router.post(
  "/",
  attendaceValidation.addAttendaceValidation,
  attendanceRecordsController.addAttendanceRecord
);
router.put(
  "/:attendance_id",
  attendaceValidation.addAttendaceValidation,
  attendanceRecordsController.updateAttendanceRecord
);

router.delete(
  "/:attendance_id",
  attendaceValidation.attendanceValidationById,
  attendanceRecordsController.deleteAttendanceRecord
);

module.exports = router;
