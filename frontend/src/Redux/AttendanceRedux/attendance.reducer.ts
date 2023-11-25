import { createSlice } from "@reduxjs/toolkit";
import { IAttendance } from "../../components/Attendance Records/Model/IAttendance";
import * as AttendanceAction from "../../Redux/AttendanceRedux/attendance.action";

export const attendanceFeatureKey = "attendanceFeatureKey";

export interface InitialState {
  attendances: IAttendance[];
  attendance: IAttendance;
}

const initialState: InitialState = {
  attendances: [] as IAttendance[],
  attendance: {} as IAttendance,
};

export const attendanceSlice = createSlice({
  name: "attendanceSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetAllAttendance
    builder.addCase(
      AttendanceAction.getAllAttendanceAction.fulfilled,
      (state, action) => {
        state.attendances = action.payload;
      }
    );

    // Get Attendance
    builder.addCase(
      AttendanceAction.getAttendanceAction.fulfilled,
      (state, action) => {
        state.attendance = action.payload;
      }
    );

    // Create Attendance
    builder.addCase(
      AttendanceAction.createAttendanceAction.fulfilled,
      (state, action) => {
        state.attendance = action.payload;
      }
    );

    // Update Attendance
    builder.addCase(
      AttendanceAction.updateAttendanceAction.fulfilled,
      (state, action) => {
        state.attendance = action.payload;
      }
    );

    // Delete Attendance
    builder.addCase(
      AttendanceAction.deleteAttendanceAction.fulfilled,
      (state, action) => {
        state.attendance = {} as IAttendance;
      }
    );
  },
});
