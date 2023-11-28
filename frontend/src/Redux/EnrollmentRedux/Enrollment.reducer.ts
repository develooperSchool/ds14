import { createSlice } from "@reduxjs/toolkit";
import * as EnrollmentActions from "./Enrollment.actions";
import {
  IENROLMENT,
  IUSERENROLLMENT,
} from "../../components/Enrollment/Model/IENROLLMENT";
export let enrollmentFeatureKey = "enrollmentFeatureKey";

export interface initialState {
  userEnrollmentData: IENROLMENT[];
  userEnrollment: IUSERENROLLMENT;
}

let State = {
  userEnrollmentData: [] as IENROLMENT[],
  userEnrollment: {} as IUSERENROLLMENT,
};

export let enrollmentSlice = createSlice({
  name: "enrollmentSlice",
  initialState: State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      EnrollmentActions.getAllEnrollmentAction.fulfilled,
      (state, action) => {
        state.userEnrollmentData = action.payload;
      }
    );

    builder.addCase(
      EnrollmentActions.createEnrollmentAction.fulfilled,
      (state, action) => {
        state.userEnrollment = action.payload;
      }
    );
  },
});
