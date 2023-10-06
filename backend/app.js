var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

<<<<<<< .mine
var indexRouter = require('./routes/index');
=======
var indexRouter = require("./routes/index");
>>>>>>> .theirs
var usersRouter = require("./routes/users.routes");
var revenueRouter = require("./routes/revenue.routes");
var studentRouter=require("./routes/student.routes")
var uroleRouter = require("./routes/urole.routes")
var roleRouter=require("./routes/roles.routes")
var courseRoutes = require("./routes/course.routes");
<<<<<<< .mine

var roleRouter=require("./routes/roles.routes")
=======
<<<<<<< .mine
var uroleRouter = require("./routes/urole.routes")
>>>>>>> .theirs
var adminRouter=require("./routes/admin.routes")
var facultyRouter=require("./routes/faculty.routes")
var guestRouter=require("./routes/guest.routes")

=======
var courseRoutes = require("./routes/course.routes");

>>>>>>> .theirs
<<<<<<< .mine




=======
var courseRoutes = require("./routes/course.routes");

>>>>>>> .theirs

>>>>>>> .theirs
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
app.use("/api/v1/urole",uroleRouter)
app.use("/api/v1/students",studentRouter)
<<<<<<< .mine

=======
app.use("/api/v1/urole",uroleRouter)
>>>>>>> .theirs

app.use("/api/v1/course", courseRoutes);
// https://localhost:3000/api/v1/course/
<<<<<<< .mine
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/faculties",facultyRouter)
app.use("/api/v1/guests",guestRouter)

=======
// https://localhost:3000/api/v1/course/

>>>>>>> .theirs<<<<<<< .mine




=======
=======
// https://localhost:3000/api/v1/course/

>>>>>>> .theirs
>>>>>>> .theirs
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
