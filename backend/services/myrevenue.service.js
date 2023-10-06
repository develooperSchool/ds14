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

const addRevenueCatogary = async (user_Name) => {
    let rows = [];
    await revenueCategoryDao.addRevenueCat(user_Name).then((result) => {
    // console.log(result);
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const deleteRevenueCatogary = async (revenueCatId) => {
    let rows = [];
    await revenueCategoryDao.deleteRevenueCat(revenueCatId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const getRevenueCatogaryById = async (revenueCatId) => {
    let rows = [];
    await revenueCategoryDao.getRevenueCatById(revenueCatId).then((result) => {
    rows = result;
    }).catch((err) => {
    console.log(err);
    });
    return rows;
}

const updateRevenueCatogary = async (revenueCatId, revenueCategoryName) => {
     let rows = [];
    await revenueCategoryDao.updateRevenueCat(revenueCatId, revenueCategoryName).then((result) => {
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




