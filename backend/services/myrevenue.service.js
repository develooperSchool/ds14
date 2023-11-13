// const express=require("express");

const revenueCategoryDao = require("../dao/myrevenue.dao");

const getAllRevenueCategory = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getAllRevenueCategory(req, res)
    .then((result) => {
      rows = result; //console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const addRevenueCategory = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .addRevenueCategory(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};
const getRevenueCategoryById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getRevenueCategoryById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const deleteRevenueCategory = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .deleteRevenueCategory(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const updateRevenueCategory = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .updateRevenueCategory(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const getAllIncomeInfo = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getAllIncomeInfo(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const getIncomeInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getIncomeInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const addIncomeInfo = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .addIncomeInfo(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const deleteIncomeInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .deleteIncomeInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};
const updateIncomeInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .updateIncomeInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const getAllExpenseInfo = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getAllExpenseInfo(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const getExpenseInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .getExpenseInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const addExpenseInfo = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .addExpenseInfo(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const updateExpenseInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .updateExpenseInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const deleteExpenseInfoById = async (req, res) => {
  let rows = [];
  await revenueCategoryDao
    .deleteExpenseInfoById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
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
