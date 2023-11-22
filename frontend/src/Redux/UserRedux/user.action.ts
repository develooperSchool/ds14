import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IUser,
  IRegisterData,
  IRegister,
  IUpdate,
  IDeactive,
  IUpdateRequest,
} from "../../components/User/Model/Iuser";
import { UserService } from "../../components/User/Services/userServices";
import { IResponse } from "../../utils/Model/Response";
import UpdateUser from "../../components/User/UpdateUser";

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

export const getUserAction: any = createAsyncThunk(
  "user/getUserAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IRegisterData | any> => {
    try {
      const { id } = payload;
      let response: IRegisterData = {
        user_id: "",
        first_name: "",
        last_name: "",
        email: "",
        contact: "",
        address: "",
        qualification: "",
        passing_year: 0,
        dob: "",
        gender: "",
        caste_category: "",
        subcaste: "",
        password: "",
      };
      let res = await UserService.getUserById(id);
      let body = res.body !== undefined ? res.body : [];
      response = body.length !== 0 ? body[0] : response;
      return response;
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
      console.log(user);
      await UserService.userLogin(user)
        .then((res) => console.log("then", res))
        .catch((err) => console.log("err", err.response.data));
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

export const updateUserAction: any = createAsyncThunk(
  "User/updateUserAction",
  async (
    payload: { updateUserData: IUpdateRequest; id: string },
    { rejectWithValue }
  ): Promise<IUpdate[] | any> => {
    try {
      const { updateUserData, id } = payload;
      let res = await UserService.updateUser(updateUserData, id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const deactiveUserAction: any = createAsyncThunk(
  "User/deactiveUserAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IDeactive[] | any> => {
    try {
      const { id } = payload;
      let res = await UserService.deactiveUser(id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const getAllActiveUserAction: any = createAsyncThunk(
  "UserRedux/getAllActiveUserAction",
  async (payload: {}, { rejectWithValue }): Promise<IResponse | any> => {
    try {
      let result: any = await UserService.getAllActiveUsers();
      console.log("result:", result.data);
      return result.data.body;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
