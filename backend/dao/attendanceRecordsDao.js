const pool = require('../config/db-config');

async function getAllAttendanceRecords() {
  try {
    const [rows] = await pool.execute('SELECT * FROM attendance_records');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAttendanceRecordById(attendanceId) {
  try {

    const [rows] = await pool.execute('SELECT * FROM attendance_records WHERE attendance_id = ?', [attendanceId]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function addAttendanceRecord(newAttendanceRecord) {
  try {
    const [result] = await pool.execute('INSERT INTO attendance_records (user_id, attendance_date, in_time, out_time, total_hours_work) VALUES (?, ?, ?, ?, ?)', [newAttendanceRecord.user_id, newAttendanceRecord.attendance_date, newAttendanceRecord.in_time, newAttendanceRecord.out_time, newAttendanceRecord.total_hours_work]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

async function updateAttendanceRecord(attendanceId, updatedAttendanceRecord) {
  try {
    await pool.execute('UPDATE attendance_records SET user_id = ?, attendance_date = ?, in_time = ?, out_time = ?, total_hours_work = ? WHERE attendance_id = ?', [updatedAttendanceRecord.user_id, updatedAttendanceRecord.attendance_date, updatedAttendanceRecord.in_time, updatedAttendanceRecord.out_time, updatedAttendanceRecord.total_hours_work, attendanceId]);
  } catch (error) {
    throw error;
  }
}

async function deleteAttendanceRecord(attendanceId) {
  try {
    await pool.execute('DELETE FROM attendance_records WHERE attendance_id = ?', [attendanceId]);
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
