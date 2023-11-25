const attendanceRecordsDao = require("../dao/attendanceRecordsDao");

async function getAllAttendanceRecords(res) {
  try {
    const records = await attendanceRecordsDao.getAllAttendanceRecords(res);
    return records;
  } catch (error) {
    throw error;
  }
}

async function getAttendanceRecordById(attendanceId, res) {
  try {
    const record = await attendanceRecordsDao.getAttendanceRecordById(
      attendanceId,
      res
    );
    return record;
  } catch (error) {
    throw error;
  }
}

async function addAttendanceRecord(newAttendanceRecord, res) {
  try {
    const insertedId = await attendanceRecordsDao.addAttendanceRecord(
      newAttendanceRecord,
      res
    );
    return insertedId;
  } catch (error) {
    throw error;
  }
}

async function updateAttendanceRecord(
  attendanceId,
  updatedAttendanceRecord,
  res
) {
  try {
    await attendanceRecordsDao.updateAttendanceRecord(
      attendanceId,
      updatedAttendanceRecord,
      res
    );
  } catch (error) {
    throw error;
  }
}

async function deleteAttendanceRecord(attendanceId, res) {
  try {
    await attendanceRecordsDao.deleteAttendanceRecord(attendanceId, res);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllAttendanceRecords,
  getAttendanceRecordById,
  addAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
};
