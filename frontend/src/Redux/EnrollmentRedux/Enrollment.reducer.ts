import { createSlice } from "@reduxjs/toolkit";
import * as EnrollmentActions from "./Enrollment.actions";
import { IENROLMENT } from "../../components/Enrollment/Model/IENROLLMENT";
export let enrollmentFeatureKey = "enrollmentFeatureKey";

export interface initialState {
  userEnrollment: IENROLMENT[];
}

let State = {
  userEnrollment: [] as IENROLMENT[],
};

export let enrollmentSlice = createSlice({
  name: "enrollmentSlice",
  initialState: State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      EnrollmentActions.getAllEnrollmentAction.fulfilled,
      (state, action) => {
        state.userEnrollment = action.payload;
      }
    );
  },
});
