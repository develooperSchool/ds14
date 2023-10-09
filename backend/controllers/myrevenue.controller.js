const revenueService = require("../services/myrevenue.service");

const getAllRevenueCategory = async (req, res) => {
    await revenueService.getAllRevenueCategory().then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err)
    });
}

const addRevenueCategory = async (req, res) => {
    await revenueService.addRevenueCategory(req.body.user_Name).then(() => {


        // console.log(rows)

        res.status(200).send("Data Added Successfully");

    }).catch((err) => {
    console.log(err);
    });
}


const deleteRevenueCategory = async (req, res) => {
    await revenueService.deleteRevenueCategory(req.params.id).then(() => {
    res.status(200).send("Given ID Details data deleted Successfully");
    }).catch((err) => {
    console.log(err);
    });
}

const getRevenueCategoryById = async (req, res) => {
    await revenueService.getRevenueCategoryById(req.params.id).then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err);
    })
}


const updateRevenueCategory = async (req, res) => {
    await revenueService.updateRevenueCategory(req.params.id, req.body.revenueCategoryName).then((rows) => {
    console.log(rows)
    res.status(200).send("Data Updated Sucessfully");
    }).catch((err) => {
    console.log(err);
    })
}

const getAllIncomeInfo = async (req, res) => {
    await revenueService.getAllIncomeInfo().then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err);
    });
}

const getIncomeInfoById = async (req, res) => {
    await revenueService.getIncomeInfoById(req.params.id).then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err);
    });
}


const addIncomeInfo = async (req, res) => {
    await revenueService.addIncomeInfo(req.body).then((rows) => {
    console.log(rows)
    res.status(200).send("Income Information Details Submitted Successfully");
    }).catch((err) => {
    console.log(err)
    })
}

const updateIncomeInfoById = async (req, res) => {
    await revenueService.updateIncomeInfoById(req.body.paidFees, req.params.id).then((rows) => {
    console.log(rows)
    res.status(200).send("Update Paid Fees Successfully");
    })
}

const deleteIncomeInfoById = async (req, res) => {
    await revenueService.deleteIncomeInfoById(req.params.id).then(() => {
    res.status(200).send("Income Record deleted...");
    }).catch((err) => {
    console.log(err)
    });
}

const getAllExpenseInfo = async (req, res) => {
    await revenueService.getAllExpenseInfo().then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err);
    });
}

const getExpenseInfoById = async (req, res) => {
    await revenueService.getExpenseInfoById(req.params.id).then((rows) => {
    res.status(200).json(rows);
    }).catch((err) => {
    console.log(err);
    });
}

const addExpenseInfo = async (req, res) => {
    await revenueService.addExpenseInfo(req.body).then((rows) => {
    console.log(rows)
    res.status(200).send("Data Expense Added...");
    }).catch((err) => {
    console.log(err)
    })
}

const updateExpenseInfo = async (req, res) => {
    await revenueService.updateExpenseInfo(req.body.amount,req.params.id).then((rows)=>{
    console.log(rows)
    res.status(200).send("Expense info Updated Successfully...")
    }).catch((err)=>{
    console.log(err);
    });
}

const deleteExpenseInfo= async (req, res) => {
    await revenueService.deleteExpenseInfo(req.params.id).then(() => {
    res.status(200).send("Income Record deleted for given ID...");
    }).catch((err) => {
    console.log(err)
    });
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
