var express=require('express');
var router=express.Router();
var controller=require("../controllers/enrollment.controller");
const validation=require('../middlewares/validations/enrollment.Validation')



//Get req for enrollment.......................................
router.get(`/get`,(req,res)=>{
    controller.getEnrollment(req,res);
});


//post req for enrollment.......................................
router.post(`/post`,validation.postEnrollmentValidation,controller.postEnrollment);


 
//Update req for enrollment......................................
router.put(`/update/:id`,validation.putEnrollmentValidation,controller.putEnrollment);



//delete req for enrollment.......................................
router.delete(`/delete/:id`,validation.deleteEnrollmentValidation,controller.deleteEnrollment);



module.exports = router;
