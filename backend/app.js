var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var revenueRouter = require("./routes/revenue.routes");
var roleRouter=require("./routes/roles.routes")

var app = express();
const salaryInfoRoutes=require('./routes/salaryInfo');
const attendanceRecordsRoutes = require('./routes/attendanceRecords');
const payrollProcessingRoutes = require('./routes/payrollProcessing')

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/revenue", revenueRouter);
app.use("/api/salary-info", salaryInfoRoutes);
app.use("/api/attendance-records",attendanceRecordsRoutes);
app.use("/api/payroll-processing",payrollProcessingRoutes);

app.use("/api/v1/roles",roleRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;