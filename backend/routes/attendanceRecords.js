const express = require('express');
const router = express.Router();
const attendanceRecordsController = require('../controllers/attendanceRecordsController');

router.get('/',attendanceRecordsController.getAllAttendanceRecords);
router.get('/:attendance_id',attendanceRecordsController.getAttendanceRecordById);
router.post('/',attendanceRecordsController.addAttendanceRecord);
router.put('/:attendance_id',attendanceRecordsController.updateAttendanceRecord);
router.delete('/:attendance_id',attendanceRecordsController.deleteAttendanceRecord);


module.exports=router;
