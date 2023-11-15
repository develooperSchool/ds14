import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IUser,
  IRegisterData,
  IRegister,
} from "../../components/User/Model/Iuser";
import { UserService } from "../../components/User/Services/userServices";

export const getAllUserAction: any = createAsyncThunk(
  "UserRedux/getAllUserAction",
  async (payload: {}, { rejectWithValue }): Promise<IRegisterData[] | any> => {
    try {
      let result: any = await UserService.getAllUsers();
      return result.data.body;
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
      console.log(user)
      await UserService.userLogin(user).then(res => console.log("then",res)).catch(err => console.log("err", err.response.data));
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
    payload: { user: IRegister },
    { rejectWithValue }
  ): Promise<IRegisterData | any> => {
    try {
      let { user } = payload;
      user = {
        ...user,
        isActive: 1,
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
