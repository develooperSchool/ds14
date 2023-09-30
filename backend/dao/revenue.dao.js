const db = require("../config/db-config");

const getAllRevenueCategories = async () => {
  let row = [];
  try {
    const [rows] = await db.query("SELECT * FROM revenue_category order by id");
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const addRevenueCategory = async (name) => {
  let row = [name];
  try {
    let query = "INSERT INTO revenue_category (name) VALUES(?)";
    const [rows] = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const deleteRevenueCategory = async (id) => {
  let row = [id];
  try {
    let query = "DELETE FROM  revenue_category WHERE id = ? ";
    const rows = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const udpateRevenueCategoryById = async (id, name) => {
  let row = [name, id];
  try {
    let query = "UPDATE revenue_category SET name = ? WHERE id = ?";
    const rows = db.query(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const saveIncomePaymentDetails = async (body) => {
  const {
    userId,
    studentId,
    revenueCategoryId,
    amount,
    totalFees,
    paidFees,
    balanceFees,
  } = body;

  let query = "";
  let row = [],
    values = [];
  try {
    values = [
      userId,
      studentId,
      revenueCategoryId,
      amount,
      totalFees,
      paidFees,
      balanceFees,
    ];
    query =
      "INSERT INTO income (user_id, student_id, revenue_category_id, amount, total_fees, paid_fees, balance_fees) " +
      "VALUES(?, ?, ?, ?, ?, ?, ?)";
    const rows = db.query(query, values);
    console.log("result", rows);
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const saveExpensePaymentDetails = async (body) => {
  const { revenueCategoryId, amount, mentorId, remark } = body;

  let query = "";
  let row = [];
  let values = [];

  try {
    values = [revenueCategoryId, amount, mentorId, remark];
    query =
      "INSERT INTO expense (revenue_category_id, amount, mentor_id, remark)" +
      "VALUES(?, ?, ?, ?)";
    const rows = db.query(query, values, function (err, records, fields) {
      console.log(records);
      console.log(fields);
    });
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const getAllIncomeDetils = async () => {
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM income ORDER BY income_id"
    );
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const getIncomeDetilsById = async (id) => {
  let row = [];
  let values = [id];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM income WHERE income_id = ?",
      values
    );
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const getAllExpenseDetils = async () => {
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM expense ORDER BY expense_id"
    );
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const getExpenseDetilsById = async (id) => {
  let row = [];
  let values = [id];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM expense WHERE expense_id = ?",
      values
    );
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

module.exports = {
  getAllRevenueCategories,
  addRevenueCategory,
  deleteRevenueCategory,
  udpateRevenueCategoryById,
  saveIncomePaymentDetails,
  saveExpensePaymentDetails,
  getAllIncomeDetils,
  getAllExpenseDetils,
  getIncomeDetilsById,
  getExpenseDetilsById,
};
