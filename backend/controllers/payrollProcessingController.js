const payrollProcessingService = require("../services/payrollProcessingService");
const HttpStatusCode = require("../utils/HttpStatusCode");
const {
  PAYROLL_PROCESSING_GET_BY_ID,
  PAYROLL_PROCESSING_ADD,
  PAYROLL_PROCESSING_UPDATE,
  PAYROLL_PROCESSING_DELETE,
} = require("../utils/app.constants");
const { respond } = require("../utils/app.utils");

async function getAllPayrollProcessing(req, res, next) {
  try {
    const records = await payrollProcessingService.getAllPayrollProcessing(res);
    res.status(HttpStatusCode.OK).json(records);
  } catch (error) {
    next(error);
  }
}

async function getPayrollProcessingById(req, res, next) {
  try {
    const payrollId = req.params.payroll_id;
    const record = await payrollProcessingService.getPayrollProcessingById(
      payrollId,
      res
    );
    res.status(HttpStatusCode.OK).json(record);
    // respond(
    //   PAYROLL_PROCESSING_GET_BY_ID,
    //   HttpStatusCode.OK,
    //   record,
    //   new Date(date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function addPayrollProcessing(req, res, next) {
  try {
    const newPayrollRecord = req.body;
    const insertedId = await payrollProcessingService.addPayrollProcessing(
      newPayrollRecord,
      res
    );
    res.status(HttpStatusCode.CREATED).json({
      message: "Payroll processing record added successfully",
      id: insertedId,
    });
    // respond(
    //   PAYROLL_PROCESSING_ADD,
    //   HttpStatusCode.CREATED,
    //   message,
    //   new Date(date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function updatePayrollProcessing(req, res, next) {
  try {
    const payrollId = req.params.payroll_id;
    const updatedPayrollRecord = req.body;
    await payrollProcessingService.updatePayrollProcessing(
      payrollId,
      updatedPayrollRecord,
      res
    );
    res
      .status(HttpStatusCode.OK)
      .json({ message: "Payroll processing record updated successfully" });
    // respond(
    //   PAYROLL_PROCESSING_UPDATE,
    //   HttpStatusCode.OK,
    //   message,
    //   new Date(date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

async function deletePayrollProcessing(req, res, next) {
  try {
    const payrollId = req.params.payroll_id;
    await payrollProcessingService.deletePayrollProcessing(payrollId, res);
    res
      .status(HttpStatusCode.OK)
      .json({ message: "Payroll processing record deleted" });
    // respond(
    //   PAYROLL_PROCESSING_DELETE,
    //   HttpStatusCode.OK,
    //   message,
    //   new Date(date.now()),
    //   res
    // );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllPayrollProcessing,
  getPayrollProcessingById,
  addPayrollProcessing,
  updatePayrollProcessing,
  deletePayrollProcessing,
};
