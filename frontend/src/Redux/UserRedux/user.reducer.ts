import { createSlice } from "@reduxjs/toolkit";
import { IRegisterData } from "../../components/User/Model/Iuser";
import * as UserAction from "./user.action";

export const userFeatureKey = "userFeature";

export interface InitialState {
  users: IRegisterData[];
  user: IRegisterData;
}

const initialState: InitialState = {
  users: [] as IRegisterData[],
  user: {} as IRegisterData,
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserAction.getAllUserAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(UserAction.userLoginAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(UserAction.createUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
