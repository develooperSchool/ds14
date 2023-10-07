const express=require("express");
const revenueController=require("../controllers/myrevenue.controller");
const revenueValidation=require("../middlewares/validations/app.validation")
const router=express.Router();

router.get("/getAllrevenueCategory",(req,res)=>{
revenueController.getAllRevenueCategory(req,res);
});

// router.get("/getRevenueCatById/:id",revenueValidation.getRevenuCategoryByIdValidation,
//     revenueController.getRevenueCategoryById);

router.get("/getRevenueCatById/:id",(req,res)=>{
revenueController.getRevenueCategoryById(req,res);
});

router.post("/addRevenueCategory",(req,res)=>{
revenueController.addRevenueCategory(req,res);
});

router.delete("/deleteRevenueCategory/:id",(req,res)=>{
revenueController.deleteRevenueCategory(req,res);
});


router.put("/updateRevenueCatBy/:id",(req,res)=>{
revenueController.updateRevenueCategory(req,res);
});

router.get("/incomeInfo",(req,res)=>{
revenueController.getAllIncomeInfo(req,res);
});

router.get("/incomeInfoById/:id",(req,res)=>{
revenueController.getIncomeInfoById(req,res);
});

router.post("/addIncome",(req,res)=>{
revenueController.addIncomeInfo(req,res);
});

router.put("/updateIncome/:id",(req,res)=>{
revenueController.updateIncomeInfoById(req,res);
});

router.delete("/deleteIncome/:id",(req,res)=>{
revenueController.deleteIncomeInfoById(req,res);
});

router.get("/getAllExpense",(req,res)=>{
revenueController.getAllExpenseInfo(req,res);
});

router.get("/getExpenseById/:id",(req,res)=>{
revenueController.getExpenseInfoById(req,res);
});

router.post("/addExpenseInfo",(req,res)=>{
revenueController.addExpenseInfo(req,res);
});

router.put("/updateExpense/:id",(req,res)=>{
revenueController.updateExpenseInfo(req,res);
});
router.delete("/deleteExpense/:id",(req,res)=>{
revenueController.deleteExpenseInfo(req,res);
});



module.exports=router;
