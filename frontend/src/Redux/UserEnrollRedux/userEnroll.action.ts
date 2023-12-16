import { Action, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IEnroll,
  IEnrollData,
} from "../../components/UserEnrollment/Model/IEnroll";
import { UserEnrollService } from "../../components/UserEnrollment/Services/userEnrollService";
import { IResponse } from "../../utils/Model/Response";

export const getAllEnrollUserAction: any = createAsyncThunk(
  "UserEnrollRedux/getAllEnrollUserAction",
  async (payload: {}, { rejectWithValue }): Promise<IEnrollData[] | any> => {
    try {
      let result: any = await UserEnrollService.getAllEnrollUsers();
      let array: any = result.data;
      console.log("Array", array);
      return result.data.body;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const getEnrollUserAction: any = createAsyncThunk(
  "userEnroll/getEnrollUserAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IEnrollData | any> => {
    try {
      const { id } = payload;
      let response: IEnrollData = {
        enroll_id: "",
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
      };
      let res = await UserEnrollService.getEnrollUserById(id);
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

export const enrollUserAction: any = createAsyncThunk(
  "UserEnrollRedux/enrollUserAction",
  async (
    payload: { userEnroll: IEnroll },
    { rejectWithValue }
  ): Promise<IEnrollData | any> => {
    try {
      let { userEnroll } = payload;
      userEnroll = {
        ...userEnroll,
        roleId: 4,
      };
      console.log("user", userEnroll);
      return UserEnrollService.enrollUser(userEnroll);
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const updateEnrollUserAction: any = createAsyncThunk(
  "UserEnroll/updateEnrollUserAction",
  async (
    payload: { updateUserData: IEnroll; id: string },
    { rejectWithValue }
  ): Promise<IEnroll[] | any> => {
    try {
      const { updateUserData, id } = payload;
      let res = await UserEnrollService.updateEnrollUser(updateUserData, id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const deleteEnrollUserByIdAction: any = createAsyncThunk(
  "UserEnrollRedux/deleteEnrollUserByIdAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IEnrollData | any> => {
    try {
      const { id } = payload;
      let res = await UserEnrollService.deleteEnrollUserById(id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
