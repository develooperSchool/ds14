import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, Iregister } from "../../components/User/Model/Iuser";
import { UserService } from "../../components/User/Services/userServices";

export const getAllUserAction: any = createAsyncThunk(
  "UserRedux/getAllUserAction",
  async (payload: {}, { rejectWithValue }): Promise<Iregister[] | any> => {
    try {
      let result = await UserService.getAllUsers();
      return result.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const userLoginAction: any = createAsyncThunk(
  "UserRedux/userLoginAction",
  async (
    payload: { user: IUser },
    { rejectWithValue }
  ): Promise<IUser | any> => {
    try {
      const { user } = payload;
      let res = await UserService.userLogin(user);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const createUserAction: any = createAsyncThunk(
  "UserRedux/createUserAction",
  async (
    payload: { user: Iregister },
    { rejectWithValue }
  ): Promise<Iregister | any> => {
    try {
      let { user } = payload;
      user = {
        ...user,
        is_active: 1,
        roleId: 4,
      };
      console.log("user", user);
      return UserService.createUser(user);
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
