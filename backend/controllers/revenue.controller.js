const service = require("../services/revenue.service");
const HttpStatusCode = require("../utils/HttpStatusCode");

const getAllRevenueCategories = (req, res) => {
  service
    .getAllRevenueCategories()
    .then((resp) => {
      res.status(HttpStatusCode.OK).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addRevenueCategory = (req, res) => {
  service
    .addRevenueCategory(req.body.name)
    .then(() => {
      res.status(HttpStatusCode.OK).send("ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRevenueCategory = (req, res) => {
  console.log(req.params.id);
  service
    .deleteRevenueCategory(req.params.id)
    .then(() => {
      res.status(HttpStatusCode.OK).send("DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const udpateRevenueCategoryById = (req, res) => {
  console.log(req.params.id, req.body.name);
  service
    .udpateRevenueCategoryById(req.params.id, req.body.name)
    .then(() => {
      res.status(HttpStatusCode.OK).send("UPDATE SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};
const saveIncomePaymentDetails = (req, res) => {
  console.log(req.body);
  service
    .saveIncomePaymentDetails(req.body)
    .then(() => {
      res.status(HttpStatusCode.OK).send("INCOME PAYMENT SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveExpensePaymentDetails = (req, res) => {
  console.log(req.body);
  service
    .saveExpensePaymentDetails(req.body)
    .then(() => {
      res.status(HttpStatusCode.OK).send("EXPENSE PAYMENT SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllIncomeDetils = (req, res) => {
  service
    .getAllIncomeDetils()
    .then((resp) => {
      res.status(HttpStatusCode.OK).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getIncomeDetilsById = (req, res) => {
  service
    .getIncomeDetilsById(req.params.id)
    .then((resp) => {
      res.status(HttpStatusCode.OK).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllExpenseDetils = (req, res) => {
  service
    .getAllExpenseDetils()
    .then((resp) => {
      res.status(HttpStatusCode.OK).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getExpenseDetilsById = (req, res) => {
  service
    .getExpenseDetilsById(req.params.id)
    .then((resp) => {
      res.status(HttpStatusCode.OK).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllRevenueCategories,
  addRevenueCategory,
  deleteRevenueCategory,
  udpateRevenueCategoryById,
  saveIncomePaymentDetails,
  saveExpensePaymentDetails,
  getAllIncomeDetils,
  getIncomeDetilsById,
  getAllExpenseDetils,
  getExpenseDetilsById,
};
