import { combineReducers } from "@reduxjs/toolkit";

import * as RevenueReducer from "./RevenueRedux/revenue.reducer";
import * as UserReducer from "./UserRedux/user.reducer";

import * as SalaryAnnexureReducer from "./PayrollRedux/salaryReducer";

import * as AttendanceReducer from "./AttendanceRedux/attendance.reducer";

import * as PayrollProcessingReducer from "./PayrollProcessingRedux/payrollprocessing.reducer";

const rootReducer: any = combineReducers({
  [RevenueReducer.revenueFeatureKey]: RevenueReducer.revenueSlice.reducer,
  [UserReducer.userFeatureKey]: UserReducer.userSlice.reducer,
  [SalaryAnnexureReducer.payrollFeatureKey]:
    SalaryAnnexureReducer.payrollSlice.reducer,
  [AttendanceReducer.attendanceFeatureKey]:
    AttendanceReducer.attendanceSlice.reducer,
  [PayrollProcessingReducer.processingFeatureKey]:
    PayrollProcessingReducer.processingSlice.reducer,
});

export default rootReducer;
