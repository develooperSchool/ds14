const attendanceRecordsDao = require('../dao/attendanceRecordsDao');

async function getAllAttendanceRecords() {
  try {
    const records = await attendanceRecordsDao.getAllAttendanceRecords();
    return records;
  } catch (error) {
    throw error;
  }
}

async function getAttendanceRecordById(attendanceId) {
  try {
    const record = await attendanceRecordsDao.getAttendanceRecordById(attendanceId);
    return record;
  } catch (error) {
    throw error;
  }
}

async function addAttendanceRecord(newAttendanceRecord) {
  try {
    const insertedId = await attendanceRecordsDao.addAttendanceRecord(newAttendanceRecord);
    return insertedId;
  } catch (error) {
    throw error;
  }
}

async function updateAttendanceRecord(attendanceId, updatedAttendanceRecord) {
  try {
    await attendanceRecordsDao.updateAttendanceRecord(attendanceId,updatedAttendanceRecord);
  } catch (error) {
    throw error;
  }
}

async function deleteAttendanceRecord(attendanceId) {
  try {
    await attendanceRecordsDao.deleteAttendanceRecord(attendanceId);
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
