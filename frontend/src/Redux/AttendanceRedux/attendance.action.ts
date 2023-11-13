import { createAsyncThunk } from "@reduxjs/toolkit";
import { AttendanceService } from "../../components/Attendance Records/Services/attendanceService";
import { IAttendance } from "../../components/Attendance Records/Model/IAttendance";

export const getAllAttendanceAction: any = createAsyncThunk(
  "AttendanceRedux/getAllAttendanceAction",
  async (payload: {}, { rejectWithValue }): Promise<IAttendance[] | any> => {
    try {
      let res = await AttendanceService.getAllAttendance();
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Get Attendance
export const getAttendanceAction: any = createAsyncThunk(
  "AttendanceRedux/getAttendanceAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IAttendance | any> => {
    try {
      const { Id } = payload;

      let res = await AttendanceService.getAttendanceById(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Create Attendance
export const createAttendanceAction: any = createAsyncThunk(
  "AttendanceRedux/createAttendanceAction",
  async (
    payload: { body: IAttendance },
    { rejectWithValue }
  ): Promise<IAttendance[] | any> => {
    try {
      const { body } = payload;

      let res = await AttendanceService.addAttendance(body);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }

      return rejectWithValue(error.res.data);
    }
  }
);

// Update Attendance
export const updateAttendanceAction: any = createAsyncThunk(
  "AttendanceRedux/updateAttendanceAction",
  async (
    payload: { updateAttendance: IAttendance; Id: number },
    { rejectWithValue }
  ): Promise<IAttendance[] | any> => {
    try {
      const { updateAttendance, Id } = payload;

      let res = await AttendanceService.updateAttendance(updateAttendance, Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Delete Attendance
export const deleteAttendanceAction: any = createAsyncThunk(
  "AttendanceRedux/deleteAttendanceAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IAttendance | any> => {
    try {
      const { Id } = payload;
      let res = await AttendanceService.deleteAttendance(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
