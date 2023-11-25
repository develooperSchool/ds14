var express=require('express');
var router=express.Router();
var controller=require("../controllers/timetable.controller");
const validation=require('../middlewares/validations/timetable.Validaton');

router.get(`/get`,(req,res)=>{controller.getTime(req,res);});

router.post(`/post`,validation.postTimeValidation,controller.postTime);

router.put(`/update/:id`,validation.putTimeValidation,controller.putTime);

router.delete(`/delete/:id`,validation.deleteTimeValidation,controller.deleteTime);

module.exports = router;
