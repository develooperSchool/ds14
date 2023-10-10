var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var courseRoutes = require("./routes/course.routes");
var uroleRouter = require("./routes/urole.routes");

var app = express();

var usersRouter = require("./routes/users.routes");
var studentRouter = require("./routes/student.routes");
var revenueRouter = require("./routes/myrevenue.routes");
var adminRouter = require("./routes/admin.routes");
var facultyRouter = require("./routes/faculty.routes");
var guestRouter = require("./routes/guest.routes");
const salaryInfoRoutes = require("./routes/salaryInfo");
const attendanceRecordsRoutes = require("./routes/attendanceRecords");
const payrollProcessingRoutes = require("./routes/payrollProcessing");
var enrollmentRouter = require("./routes/enrollment.routes");

//project routes............................
//let enrollmentRouter=require('./router/enrollment.routes');
let course2tRouter = require("./routes/course2.router");
let faculty2tRouter = require("./routes/faculty2.router");
let subjectstRouter = require("./routes/subjects.router");
let TimeRouter = require("./routes/timetable.routes");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/revenue", revenueRouter);
app.use("/api/salary-info", salaryInfoRoutes);
app.use("/api/attendance-records", attendanceRecordsRoutes);
app.use("/api/payroll-processing", payrollProcessingRoutes);
app.use("/api/v1/urole", uroleRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/course", courseRoutes);
// https://localhost:3000/api/v1/course/
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/faculties", facultyRouter);
app.use("/api/v1/guests", guestRouter);
app.use("/api/v1/enrollment", enrollmentRouter);

//project....................................
//app.use('/api/v1/enrollment',enrollmentRouter);
app.use("/api/v1/course2", course2tRouter);
app.use("/api/v1/faculty2", faculty2tRouter);
app.use("/api/v1/subjects", subjectstRouter);
app.use("/api/v1/timetable", TimeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
