const attendanceRecordsService = require("../services/attendanceRecordsService");
const HttpStatusCode = require("../utils/HttpStatusCode");
const {
  ATTENDANCE_RECORDS_GET,
  ATTENDANCE_RECORDS_GET_BY_ID,
  ATTENDANCE_RECORDS_ADD,
  ATTENDANCE_RECORDS_UPDATE,
  ATTENDANCE_RECORDS_DELETE,
} = require("../utils/app.constants");
const { respond } = require("../utils/app.utils");

async function getAllAttendanceRecords(req, res, next) {
  try {
    const records = await attendanceRecordsService.getAllAttendanceRecords(res);
    res.status(HttpStatusCode.OK).json(records);
    // respond(
    //   ATTENDANCE_RECORDS_GET,
    //   HttpStatusCode.OK,
    //   records,
    //   new Date(Date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function getAttendanceRecordById(req, res, next) {
  try {
    const attendanceId = req.params.attendance_id;
    const record = await attendanceRecordsService.getAttendanceRecordById(
      attendanceId,
      res
    );
    res.status(HttpStatusCode.OK).json(record);
    // respond(
    //   ATTENDANCE_RECORDS_GET_BY_ID,
    //   HttpStatusCode.OK,
    //   record,
    //   new Date(date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function addAttendanceRecord(req, res, next) {
  try {
    const newAttendanceRecord = req.body;
    const insertedId = await attendanceRecordsService.addAttendanceRecord(
      newAttendanceRecord,
      res
    );
    res.status(HttpStatusCode.CREATED).json({
      message: "Attendance record added successfully",
      id: insertedId,
    });
    // respond(
    //   ATTENDANCE_RECORDS_ADD,
    //   HttpStatusCode.CREATED,
    //   message,
    //   new Date(DATE.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function updateAttendanceRecord(req, res, next) {
  try {
    const attendanceId = req.params.attendance_id;
    const updatedAttendanceRecord = req.body;
    await attendanceRecordsService.updateAttendanceRecord(
      attendanceId,
      updatedAttendanceRecord,
      res
    );
    res
      .status(HttpStatusCode.OK)
      .json({ message: "Attendance record updated successfully" });
    // respond(
    //   ATTENDANCE_RECORDS_UPDATE,
    //   HttpStatusCode.OK,
    //   message,
    //   new Date(DATE.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function deleteAttendanceRecord(req, res, next) {
  try {
    const attendanceId = req.params.attendance_id;
    await attendanceRecordsService.deleteAttendanceRecord(attendanceId, res);
    res
      .status(HttpStatusCode.OK)
      .json({ message: "Attendance record deleted successfully" });
    // respond(
    //   ATTENDANCE_RECORDS_DELETE,
    //   HttpStatusCode.OK,
    //   message,
    //   new Date(DATE.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllAttendanceRecords,
  getAttendanceRecordById,
  addAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
};
