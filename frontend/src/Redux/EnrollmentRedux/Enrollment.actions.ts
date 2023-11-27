import { createAsyncThunk } from "@reduxjs/toolkit";
import { EnrollmentServices } from "../../components/Enrollment/Services/EnrollmentServices";
import { IENROLMENT } from "../../components/Enrollment/Model/IENROLLMENT";

export const getAllEnrollmentAction: any = createAsyncThunk(
  "EnrollmentRedux/Enrollment.actions/getAllEnrollmentAction",
  async (payload: {}, { rejectWithValue }): Promise<IENROLMENT[] | any> => {
    try {
      let res = await EnrollmentServices.getAllEnrollments();
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);
