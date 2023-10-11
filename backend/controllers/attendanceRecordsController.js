const attendanceRecordsService = require("../services/attendanceRecordsService");
const HttpStatusCode = require("../utils/HttpStatusCode");

async function getAllAttendanceRecords(req, res, next) {
  try {
    const records = await attendanceRecordsService.getAllAttendanceRecords(res);
    res.status(HttpStatusCode.OK).json(records);
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
