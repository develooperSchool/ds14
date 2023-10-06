const express = require('express');
const router = express.Router();
const payrollProcessingController = require('../controllers/payrollProcessingController');

router.get('/', payrollProcessingController.getAllPayrollProcessing);
router.get('/:payroll_id', payrollProcessingController.getPayrollProcessingById);
router.post('/', payrollProcessingController.addPayrollProcessing);
router.put('/:payroll_id', payrollProcessingController.updatePayrollProcessing);
router.delete('/:payroll_id', payrollProcessingController.deletePayrollProcessing);

module.exports = router;
