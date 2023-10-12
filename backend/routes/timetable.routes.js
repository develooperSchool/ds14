var express=require('express');
var router=express.Router();
var controller=require("../controllers/timetable.controller");
const validation=require('../middlewares/validations/timetable.Validaton');



//Get req for timetable.......................................
router.get(`/get`,(req,res)=>{
    controller.getTime(req,res);
});


//post req for timetable......................................
router.post(`/post`,validation.postTimeValidation,controller.postTime);


 
//Update req for timetable......................................
router.put(`/update/:id`,validation.putTimeValidation,controller.putTime);



//delete req for timetable.......................................
router.delete(`/delete/:id`,validation.deleteTimeValidation,controller.deleteTime);



module.exports = router;
