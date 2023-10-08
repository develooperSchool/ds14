// const express=require("express");


const revenueCategoryDao = require("../dao/myrevenue.dao");

const getAllRevenueCategory = async () => {
    let rows = [];
    await revenueCategoryDao.getAllRevenueCategory().then((result) => {
    rows = result;//console.log(result);
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const addRevenueCategory = async (user_Name) => {
    let rows = [];
    await revenueCategoryDao.addRevenueCategory(user_Name).then((result) => {
    // console.log(result);
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const deleteRevenueCategory = async (revenueCatId) => {
    let rows = [];
    await revenueCategoryDao.deleteRevenueCategory(revenueCatId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const getRevenueCategoryById = async (revenueCatId) => {
    let rows = [];
    await revenueCategoryDao.getRevenueCategoryById(revenueCatId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const updateRevenueCategory = async (revenueCatId, revenueCategoryName) => {
     let rows = [];
    await revenueCategoryDao.updateRevenueCategory(revenueCatId, revenueCategoryName).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    })
    return rows;
}

const getAllIncomeInfo = async () => {
    let rows = [];
    await revenueCategoryDao.getAllIncomeInfo().then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const getIncomeInfoById = async (incomeId) => {
    let rows = [];
    await revenueCategoryDao.getIncomeInfoById(incomeId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const addIncomeInfo = async (body) => {
    let rows = [];
    await revenueCategoryDao.addIncomeInfo(body).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    })
    return rows;
}

const updateIncomeInfoById = async (paidFees, incomeId) => {
    let rows = [];
    await revenueCategoryDao.updateIncomeInfoById(paidFees, incomeId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    })
    return rows;
}

const deleteIncomeInfoById = async (incomeId) => {
    let rows = [];
    await revenueCategoryDao.deleteIncomeInfoById(incomeId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    })
    return rows;
}

const getAllExpenseInfo = async () => {
    let rows = [];
    await revenueCategoryDao.getAllExpenseInfo().then((result) => { 
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const getExpenseInfoById = async (expenseId) => {
    let rows = [];
    await revenueCategoryDao.getExpenseInfoById(expenseId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const addExpenseInfo = async (body) => {
    let rows = [];
    await revenueCategoryDao.addExpenseInfo(body).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const updateExpenseInfo = async (amount, expenseId) => {
    let rows = [];
    await revenueCategoryDao.updateIncomeInfoById(amount, expenseId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const deleteExpenseInfo = async (expenseId) => {
    let rows = [];
    await revenueCategoryDao.deleteExpenseInfo(expenseId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    })
    return rows;
}


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
    updateExpenseInfo,
    deleteExpenseInfo


}




