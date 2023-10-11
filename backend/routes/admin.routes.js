const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get("/", (req, res) => {
  adminController.getAllAdmin(req, res);
});

module.exports = router;
