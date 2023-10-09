const revenueService = require("../services/myrevenue.service");
const HttpStatusCode = require("../utils/HttpStatusCode");

const getAllRevenueCategory = async (req, res) => {
  await revenueService
    .getAllRevenueCategory()
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addRevenueCategory = async (req, res) => {
  await revenueService
    .addRevenueCategory(req.body.user_Name)
    .then(() => {
      // console.log(rows)

      res
        .status(HttpStatusCode.OK)
        .send("REVENUE CATEGORY IS ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRevenueCategory = async (req, res) => {
  await revenueService
    .deleteRevenueCategory(req.params.id)
    .then(() => {
      res
        .status(HttpStatusCode.OK)
        .send("REVENUE CATEGORY IS DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRevenueCategoryById = async (req, res) => {
  await revenueService
    .getRevenueCategoryById(req.params.id)
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateRevenueCategory = async (req, res) => {
  await revenueService
    .updateRevenueCategory(req.params.id, req.body.revenueCategoryName)
    .then((rows) => {
      console.log(rows);
      res
        .status(HttpStatusCode.OK)
        .send("REVENUE CATEGORY IS UPDATED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllIncomeInfo = async (req, res) => {
  await revenueService
    .getAllIncomeInfo()
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getIncomeInfoById = async (req, res) => {
  await revenueService
    .getIncomeInfoById(req.params.id)
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addIncomeInfo = async (req, res) => {
  await revenueService
    .addIncomeInfo(req.body)
    .then((rows) => {
      console.log(rows);
      res
        .status(HttpStatusCode.OK)
        .send("INCOME DETAILS IS ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateIncomeInfoById = async (req, res) => {
  await revenueService
    .updateIncomeInfoById(req.body.paidFees, req.params.id)
    .then((rows) => {
      console.log(rows);
      res
        .status(HttpStatusCode.OK)
        .send("INCOME DETAILS IS UPDATED SUCCESSFULLY");
    });
};

const deleteIncomeInfoById = async (req, res) => {
  await revenueService
    .deleteIncomeInfoById(req.params.id)
    .then(() => {
      res
        .status(HttpStatusCode.OK)
        .send("INCOME DETAILS IS DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllExpenseInfo = async (req, res) => {
  await revenueService
    .getAllExpenseInfo()
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getExpenseInfoById = async (req, res) => {
  await revenueService
    .getExpenseInfoById(req.params.id)
    .then((rows) => {
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addExpenseInfo = async (req, res) => {
  await revenueService
    .addExpenseInfo(req.body)
    .then((rows) => {
      console.log(rows);
      res
        .status(HttpStatusCode.OK)
        .send("EXPENSE DETAILS IS ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateExpenseInfo = async (req, res) => {
  await revenueService
    .updateExpenseInfo(req.body.amount, req.params.id)
    .then((rows) => {
      console.log(rows);
      res
        .status(HttpStatusCode.OK)
        .send("EXPENSE DETAILS IS UPDATED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteExpenseInfo = async (req, res) => {
  await revenueService
    .deleteExpenseInfo(req.params.id)
    .then(() => {
      res
        .status(HttpStatusCode.OK)
        .send("EXPENSE DETAILS IS DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
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
  updateExpenseInfo,
  deleteExpenseInfo,
};
