import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnrollmentServices } from "../../components/Enrollment/Services/EnrollmentServices";
import {
  IENROLMENT,
  IUSERENROLLMENT,
} from "../../components/Enrollment/Model/IENROLLMENT";

export const getAllEnrollmentAction: any = createAsyncThunk(
  "EnrollmentRedux/Enrollment.actions/getAllEnrollmentAction",
  async (payload: {}, { rejectWithValue }): Promise<IENROLMENT[] | any> => {
    try {
      let res = await EnrollmentServices.getAllEnrollments();
      const array: any = res.data;
      return array.body;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const createEnrollmentAction: any = createAsyncThunk(
  "EnrollmentRedux/Enrollment.actions/createEnrollmentAction",
  async (
    payload: { obj: IUSERENROLLMENT },
    { rejectWithValue }
  ): Promise<IUSERENROLLMENT | any> => {
    try {
      let { obj } = payload;
      let res = await EnrollmentServices.createEnrollment(obj);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);
