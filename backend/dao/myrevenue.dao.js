const db = require("../config/db-config");


const getAllRevenueCategory = async () => {
    let values = [];
    let result = [];
    try {
        let sqlQuery = "select * from revenue_category";
        const [rows, fields] = await db.query(sqlQuery, values)
        result = rows;
        // console.log("rows", rows);
        // console.log("fields",fields);
        }
        catch (err) {
        console.error(err);
        }
    return result;
}

const addRevenueCatogary = async (user_Name) => {
    let values = [user_Name];
    let result = [];
    try {
        let sqlQuery = "insert into revenue_category (revenue_category_name) values (?)";
        let [rows] = await db.query(sqlQuery, values);
        result = rows;
        // console.log(values);
        }
        catch (err) {
        console.error(err)
        }
        return result;
    }


const deleteRevenueCatogary = async (revenueCatId) => {
    let values = [revenueCatId];
    let result = [];
    try {
    let sqlQuery = "DELETE FROM revenue_category WHERE revenue_category_id = ? ";
    let [rows] = await db.query(sqlQuery, values);
    result = rows;// console.log(result)
    }
    catch (err) {
    console.log(err);
    }
    return result;
}



const getRevenueCatogaryById = async (revenueCatId) => {
    let values = [revenueCatId];
    let result = [];
    try {
        sqlQuery = "select * from revenue_category where revenue_category_id = ?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const updateRevenueCatogary = async (revenueCatId, revenueCategoryName) => {
    let values = [revenueCategoryName, revenueCatId];
    let result = [];
    try {
        let sqlQuery = "update revenue_category SET revenue_category_name = ? WHERE revenue_category_id = ?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
    }
    catch (err) {
    console.log(err);
    }
    return result;
}

const getAllIncomeInfo = async () => {
    let values = [];
    let result = [];
    try {
        sqlQuery = "select * from income";
        const [rows] = await db.query(sqlQuery, values);//    console.log(rows);
        result = rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const getIncomeInfoById = async (incomeId) => {
    let values = [incomeId];
    let result = [];
    try {
        sqlQuery = "select * from income where income_id=?"
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const addIncomeInfo = async (body) => {

    const { studentId, totalFees, balanceFees, piadFees, transactionID, amount, userID, revenueCategoryId } = body;
    let values = [studentId, totalFees, balanceFees, piadFees, transactionID, amount, userID, revenueCategoryId];
    let result = [];
    try {
        let sqlQuery = "insert into income (student_id,total_fees,balance_fees,paid_fees,transaction_id,amount,user_id,revenue_category_id) values(?,?,?,?,?,?,?,?)"
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
    catch (err) {
        console.log(err);
        }
    return result;
}

const updateIncomeInfoById = async (paidFees, incomeId) => {
        let values = [paidFees, incomeId];
        let result = [];
        try {
        sqlQuery = "update income set paid_fees=? where income_id=?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
    catch (err) {
        console.log(err);
        }
    return result;
}

const deleteIncomeInfoById = async (incomeId) => {
        let values = [incomeId];
        let result = [];
        try {
        sqlQuery = "DELETE FROM income WHERE income_id = ?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const getAllExpenseInfo = async () => {
        let values = [];
        let result = [];
        try {
        sqlQuery = "select * from expense";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const getExpenseInfoById = async (expenseId) => {
    let values = [expenseId];
    let result = [];
    try {
        sqlQuery = "select * from expense where expense_id=?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
    }
    catch (err) {
        console.log(err);
        }
    return result;
}

const addExpenseInfo = async (body) => {
        let result = [];
        const {revenueCategoryId, amount, mentorId, remark} = body;
        let values = [revenueCategoryId, amount, mentorId, remark];
    try {
        sqlQuery = "insert into expense (revenue_category_id,amount,mentor_id,remark) values (?,?,?,?)";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
    catch (err) {
        console.log(err);
        }
    return result;
}

const updateExpenseInfo = async (amount,expenseId) => { 
        let values = [amount,expenseId];
        let result = [];
        try {
        sqlQuery = "update expense set amount=? where expense_id=?";
        const [rows] = await db.query(sqlQuery, values);
        result =rows;
        }
        catch (err) {
        console.log(err);
        }
    return result;
}

const deleteExpenseInfo=async(expenseId)=>{
        let values = [expenseId];
        let result = [];
        try {
        sqlQuery = "DELETE FROM expense WHERE expense_id = ?";
        const [rows] = await db.query(sqlQuery, values);
        result = rows;
        }
        catch (err) {
        console.log(err);
         }
    return result;
}

module.exports = {
    getAllRevenueCategory,
    addRevenueCatogary,
    deleteRevenueCatogary,
    getRevenueCatogaryById,
    updateRevenueCatogary,
    getAllIncomeInfo,
    getIncomeInfoById,
    addIncomeInfo,
    updateIncomeInfoById,
    deleteIncomeInfoById,
    getAllExpenseInfo,
    getExpenseInfoById,
    addExpenseInfo,
    updateExpenseInfo,
    deleteExpenseInfo


}




