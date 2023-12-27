import { createSlice } from "@reduxjs/toolkit";
import { IEnrollData } from "../../components/UserEnrollment/Model/IEnroll";
import { UserEnrollService } from "../../components/UserEnrollment/Services/userEnrollService";
import * as UserEnrollAction from "./userEnroll.action";

export const userEnrollFeatureKey = "userEnrollFeature";

export interface InitialState {
  usersEnroll: IEnrollData[];
  userEnroll: IEnrollData;
}

const initialState: InitialState = {
  usersEnroll: [] as IEnrollData[],
  userEnroll: {} as IEnrollData,
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      UserEnrollAction.getAllEnrollUserAction.fulfilled,
      (state, action) => {
        state.usersEnroll = action.payload;
      }
    );
    builder.addCase(
      UserEnrollAction.getEnrollUserAction.fulfilled,
      (state, action) => {
        state.userEnroll = action.payload;
      }
    );

    builder.addCase(
      UserEnrollAction.enrollUserAction.fulfilled,
      (state, action) => {
        state.userEnroll = action.payload;
      }
    );

    builder.addCase(
      UserEnrollAction.updateEnrollUserAction.fulfilled,
      (state, action) => {
        state.userEnroll = action.payload;
      }
    );
    builder.addCase(
      UserEnrollAction.deleteEnrollUserByIdAction.fulfilled,
      (state, action) => {
        state.userEnroll = {} as IEnrollData;
      }
    );
  },
});
