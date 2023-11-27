import { combineReducers } from "@reduxjs/toolkit";
import * as couresReducer from "./CoursesRedux/Courses.reducer";
import * as timeReducer from "./TimetableRedux/Timetable.reducer";
import * as facultyReducer from "./facultyRedux/faculty.Retucer";
import * as RevenueReducer from "./RevenueRedux/revenue.reducer";
import * as UroleReducer from "./UroleRedux/urole.reducer";
import * as UserReducer from "./UserRedux/user.reducer";
import * as SalaryAnnexureReducer from "./PayrollRedux/salaryReducer";
import * as AttendanceReducer from "./AttendanceRedux/attendance.reducer";
import * as PayrollProcessingReducer from "./PayrollProcessingRedux/payrollprocessing.reducer";

let rootReducer: any = combineReducers({
  [couresReducer.CourseFeatureKey]: couresReducer.couresSlice.reducer,
  [timeReducer.timeFeatureKey]: timeReducer.TimetableSlice.reducer,
  [facultyReducer.facultyFeatureKey]: facultyReducer.facultySlice.reducer,
  [RevenueReducer.revenueFeatureKey]: RevenueReducer.revenueSlice.reducer,
  [UserReducer.userFeatureKey]: UserReducer.userSlice.reducer,
  [SalaryAnnexureReducer.salaryfeatureKey]:
    SalaryAnnexureReducer.salarySlice.reducer,
  [AttendanceReducer.attendanceFeatureKey]:
    AttendanceReducer.attendanceSlice.reducer,
  [PayrollProcessingReducer.processingFeatureKey]:
    PayrollProcessingReducer.processingSlice.reducer,
  [UroleReducer.uroleFeatureKey]: UroleReducer.uroleSlice.reducer,
});

export default rootReducer;
