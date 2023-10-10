const express = require('express');
const router = express.Router();
const salaryInfoController = require('../controllers/salaryInfoController');

router.get('/',salaryInfoController.getAllSalaryInfo)
router.get('/:salary_id',salaryInfoController.getSalaryInfoById);
router.post('/',salaryInfoController.addSalaryInfo);
router.put('/:salary_id', salaryInfoController.updateSalaryInfo);
router.delete('/:salary_id',salaryInfoController.deleteSalaryInfo)

module.exports = router;
