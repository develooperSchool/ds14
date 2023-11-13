const SqlError = require("../errors/SqlError");
const revenueService = require("../services/myrevenue.service");
const HttpStatusCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  ALL_REVENUE_CATEGORY_DETAILS_GET_SUCCESSFULLY,
  REVENUE_CATEGORY_DELETED_SUCCESSFULLY,
  REVENUE_CATEGORY_IS_ADDED_SUCCESSFULLY,
  REVENUE_CATEGORY_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
  REVENUE_CATEGORY_IS_UPDATED_SUCCESSFULLY,
  ALL_INCOME_INFORMATION_GET_SUCCESSFULLY,
  INCOME_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
  INCOME_DETAILS_IS_ADDED_SUCCESSFULLY,
  INCOME_DETAILS_IS_DELETED_SUCCESSFULLY,
  INCOME_DETAILS_IS_UPDATED_SUCCESSFULLY,
  ALL_EXPENSE_INFORMATION_GET_SUCCESSFULLY,
  EXPENSE_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
  EXPENSE_DETAILS_IS_ADDED_SUCCESSFULLY,
  EXPENSE_DETAILS_IS_UPDATED_SUCCESSFULLY,
  EXPENSE_DETAILS_IS_DELETED_SUCCESSFULLY,
} = require("../utils/app.constants");

const getAllRevenueCategory = async (req, res) => {
  await revenueService
    .getAllRevenueCategory(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        ALL_REVENUE_CATEGORY_DETAILS_GET_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const addRevenueCategory = async (req, res) => {
  await revenueService
    .addRevenueCategory(req, res)
    .then((rows) => {
      // console.log(rows)

      //res.status(HttpStatusCode.CREATED).json("REVENUE CATEGORY IS ADDED SUCCESSFULLY");
      respond(
        REVENUE_CATEGORY_IS_ADDED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRevenueCategoryById = async (req, res) => {
  await revenueService
    .getRevenueCategoryById(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        REVENUE_CATEGORY_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRevenueCategory = async (req, res) => {
  await revenueService
    .deleteRevenueCategory(req, res)
    .then((rows) => {
      // res
      //   .status(HttpStatusCode.OK)
      //   .json("REVENUE CATEGORY IS DELETED SUCCESSFULLY");
      respond(
        REVENUE_CATEGORY_DELETED_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })

    .catch((err) => {
      console.log(err);
    });
};

const updateRevenueCategory = async (req, res) => {
  await revenueService
    .updateRevenueCategory(req, res)
    .then((rows) => {
      // res
      //   .status(HttpStatusCode.CREATED)
      //   .json("REVENUE CATEGORY IS UPDATED SUCCESSFULLY");
      respond(
        REVENUE_CATEGORY_IS_UPDATED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllIncomeInfo = async (req, res) => {
  await revenueService
    .getAllIncomeInfo(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        ALL_INCOME_INFORMATION_GET_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })

    .catch((err) => {
      console.log(err);
    });
};

const getIncomeInfoById = async (req, res) => {
  await revenueService
    .getIncomeInfoById(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        INCOME_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const addIncomeInfo = async (req, res) => {
  await revenueService
    .addIncomeInfo(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.CREATED).json("INCOME DETAILS IS ADDED SUCCESSFULLY");
      respond(
        INCOME_DETAILS_IS_ADDED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteIncomeInfoById = async (req, res) => {
  await revenueService
    .deleteIncomeInfoById(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json("INCOME DETAILS IS DELETED SUCCESSFULLY");
      respond(
        INCOME_DETAILS_IS_DELETED_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateIncomeInfoById = async (req, res) => {
  await revenueService.updateIncomeInfoById(req, res).then((rows) => {
    //res.status(HttpStatusCode.CREATED).json("INCOME DETAILS IS UPDATED SUCCESSFULLY");
    respond(
      INCOME_DETAILS_IS_UPDATED_SUCCESSFULLY,
      HttpStatusCode.CREATED,
      rows,
      new Date(Date.now()),
      res
    );
  });
};

const getAllExpenseInfo = async (req, res) => {
  await revenueService
    .getAllExpenseInfo(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        ALL_EXPENSE_INFORMATION_GET_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const getExpenseInfoById = async (req, res) => {
  await revenueService
    .getExpenseInfoById(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        EXPENSE_INFORMATION_GET_BY_ID_IS_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const addExpenseInfo = async (req, res) => {
  await revenueService
    .addExpenseInfo(req, res)
    .then((rows) => {
      // res
      //   .status(HttpStatusCode.CREATED)
      //   .json("EXPENSE DETAILS IS ADDED SUCCESSFULLY");
      respond(
        EXPENSE_DETAILS_IS_ADDED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateExpenseInfoById = async (req, res) => {
  await revenueService
    .updateExpenseInfoById(req, res)
    .then((rows) => {
      //res
      // .status(HttpStatusCode.CREATED)
      // .json("EXPENSE DETAILS IS UPDATED SUCCESSFULLY");
      respond(
        EXPENSE_DETAILS_IS_UPDATED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteExpenseInfoById = async (req, res) => {
  await revenueService
    .deleteExpenseInfoById(req, res)
    .then((rows) => {
      // res
      //   .status(HttpStatusCode.OK)
      //   .json("EXPENSE DETAILS IS DELETED SUCCESSFULLY");
      respond(
        EXPENSE_DETAILS_IS_DELETED_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
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
  updateExpenseInfoById,
  deleteExpenseInfoById,
};
