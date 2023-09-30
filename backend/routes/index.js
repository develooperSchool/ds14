var express = require('express');
var router = express.Router();
const db = require("../config/db-config");

// router.get("/", async (req, res) => {
//   try {
//     const [rows, fields] = await db.query("SELECT * FROM test");
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
