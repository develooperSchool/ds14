const pool = require("../config/db-config");
const SqlError = require("../errors/SqlError");

async function getAllAttendanceRecords(res) {
  try {
    const [rows] = await pool.execute("SELECT * FROM attendance_records");
    return rows;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function getAttendanceRecordById(attendanceId, res) {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM attendance_records WHERE attendance_id = ?",
      [attendanceId]
    );
    return rows[0];
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function addAttendanceRecord(newAttendanceRecord, res) {
  try {
    const [result] = await pool.execute(
      "INSERT INTO attendance_records (user_id, attendance_date, in_time, out_time, total_hours_work) VALUES (?, ?, ?, ?, ?)",
      [
        newAttendanceRecord.user_id,
        newAttendanceRecord.attendance_date,
        newAttendanceRecord.in_time,
        newAttendanceRecord.out_time,
        newAttendanceRecord.total_hours_work,
      ]
    );
    return result.insertId;
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function updateAttendanceRecord(
  attendanceId,
  updatedAttendanceRecord,
  res
) {
  try {
    await pool.execute(
      "UPDATE attendance_records SET user_id = ?, attendance_date = ?, in_time = ?, out_time = ?, total_hours_work = ? WHERE attendance_id = ?",
      [
        updatedAttendanceRecord.user_id,
        updatedAttendanceRecord.attendance_date,
        updatedAttendanceRecord.in_time,
        updatedAttendanceRecord.out_time,
        updatedAttendanceRecord.total_hours_work,
        attendanceId,
      ]
    );
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

async function deleteAttendanceRecord(attendanceId, res) {
  try {
    await pool.execute(
      "DELETE FROM attendance_records WHERE attendance_id = ?",
      [attendanceId]
    );
  } catch (error) {
    throw new SqlError(String(error.sqlMessage).toUpperCase(), res);
  }
}

module.exports = {
  getAllAttendanceRecords,
  getAttendanceRecordById,
  addAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
};
