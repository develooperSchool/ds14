import { createSlice } from "@reduxjs/toolkit";
import { IUser, Iregister } from "../../Model/Iuser";
import * as UserAction from "../UserRedux/user.action";

export const userFeatureKey = "userFeature";

export interface InitialState {
  Users: IUser[];
  user: IUser;
}

const initialState: InitialState = {
  Users: [] as Iregister[],
  user: {} as Iregister,
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      UserAction.userLoginAction.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
  },
});
