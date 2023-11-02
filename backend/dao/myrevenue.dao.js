const db = require("../config/db-config");
const SqlError = require("../errors/SqlError");
const getAllRevenueCategory = async (req, res) => {
  let values = [];
  let result = [];
  try {
    let sqlQuery = "select * from revenue_category";
    const [rows, fields] = await db.query(sqlQuery, values);
    result = rows;
    // console.log("rows", rows);
    // console.log("fields",fields);
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const addRevenueCategory = async (req, res) => {
  let values = [req.body.name];
  let result = [];
  try {
    let sqlQuery =
      "insert into revenue_category(revenue_category_name) values (?)";
    let [rows] = await db.query(sqlQuery, values);
    result = rows;
    // console.log(values);
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};
const getRevenueCategoryById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    sqlQuery = "select * from revenue_category where revenue_category_id = ?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deleteRevenueCategory = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    let sqlQuery =
      "DELETE FROM revenue_category WHERE revenue_category_id = ? ";
    let [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const updateRevenueCategory = async (req, res) => {
  let values = [req.body.revenueCategoryName, req.params.id];
  let result = [];
  try {
    let sqlQuery =
      "update revenue_category SET revenue_category_name = ? WHERE revenue_category_id = ?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getAllIncomeInfo = async (req, res) => {
  let values = [];
  let result = [];
  try {
    sqlQuery = "select * from income";
    const [rows] = await db.query(sqlQuery, values); //    console.log(rows);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getIncomeInfoById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    sqlQuery = "select * from income where income_id=?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const addIncomeInfo = async (req, res) => {
  const {
    studentId,
    totalFees,
    balanceFees,
    piadFees,
    transactionID,
    amount,
    userID,
    revenueCategoryId,
  } = req.body;
  let values = [
    studentId,
    totalFees,
    balanceFees,
    piadFees,
    transactionID,
    amount,
    userID,
    revenueCategoryId,
  ];
  let result = [];
  try {
    let sqlQuery =
      "insert into income(student_id,total_fees,balance_fees,paid_fees,transaction_id,amount,user_id,revenue_category_id) values(?,?,?,?,?,?,?,?)";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deleteIncomeInfoById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    sqlQuery = "DELETE FROM income WHERE income_id = ?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};
const updateIncomeInfoById = async (req, res) => {
  let values = [req.body.paidFees, req.params.id];
  let result = [];
  try {
    sqlQuery = "update income set paid_fees=? where income_id=?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};
const getAllExpenseInfo = async (req, res) => {
  let values = [];
  let result = [];
  try {
    sqlQuery = "select * from expense";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const getExpenseInfoById = async (req, res) => {
  let values = [req.params.id];
  let result = [];
  try {
    sqlQuery = "select * from expense where expense_id=?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const addExpenseInfo = async (req, res) => {
  let result = [];
  const { revenueCategoryId, amount, mentorId, remark } = req.body;
  let values = [revenueCategoryId, amount, mentorId, remark];
  try {
    sqlQuery =
      "insert into expense (revenue_category_id,amount,mentor_id,remark) values (?,?,?,?)";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const updateExpenseInfoById = async (req, res) => {
  let values = [req.body.amount, req.params.id];
  let result = [];
  try {
    sqlQuery = "update expense set amount=? where expense_id=?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

const deleteExpenseInfoById = async (req, res) => {
  let values = [req.param.id];
  let result = [];
  try {
    sqlQuery = "DELETE FROM expense WHERE expense_id = ?";
    const [rows] = await db.query(sqlQuery, values);
    result = rows;
  } catch (err) {
    throw new SqlError(String(err.sqlMessage).toUpperCase(), res);
  }
  return result;
};

module.exports = {
  getAllRevenueCategory,
  addRevenueCategory,
  deleteRevenueCategory,
  getRevenueCategoryById,
  updateRevenueCategory,
  getAllIncomeInfo,
  getIncomeInfoById,
  addIncomeInfo,
  updateIncomeInfoById,
  deleteIncomeInfoById,
  getAllExpenseInfo,
  getExpenseInfoById,
  addExpenseInfo,
  updateExpenseInfoById,
  deleteExpenseInfoById,
};
