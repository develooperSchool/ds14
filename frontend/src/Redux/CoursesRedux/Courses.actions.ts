import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IC,
  ICOURSES,
  IPURCHASE,
} from "../../components/Courses/Model/Icourses";
import { Courseservices } from "../../components/Courses/Services/Courseservices";
import { IUSERBYID } from "../../components/Faculty/Model/Ifaculty";

export const getAllCourseAction: any = createAsyncThunk(
  "CoursesRedux/Courses.actions/getAllCourseAction",
  async (payload: {}, { rejectWithValue }): Promise<ICOURSES[] | any> => {
    try {
      let res = await Courseservices.getAllCourses();
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getCourseByIdAction: any = createAsyncThunk(
  "CoursesRedux/Courses.actions/getCourseByIdAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<ICOURSES | any> => {
    let { Id } = payload;
    try {
      let res = await Courseservices.getCoursesById(Id);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getPurchasedCourseByIdAction: any = createAsyncThunk(
  "CoursesRedux/Courses.actions/getPurchasedCourseByIdAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IPURCHASE[] | any> => {
    let { Id } = payload;
    try {
      let res = await Courseservices.getPurchasedCoursesById(Id);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const deleteCourseAction: any = createAsyncThunk(
  "CoursesRedux/Courses.actions/deleteCourseAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<ICOURSES | any> => {
    let { Id } = payload;
    try {
      let res = await Courseservices.DeleteCourseById(Id);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const createCourseAction: any = createAsyncThunk(
  "CoursesRedux/createCourseAction",
  async (
    payload: { obj: IC },
    { rejectWithValue }
  ): Promise<ICOURSES | any> => {
    let { obj } = payload;
    try {
      let res = await Courseservices.createCourses(obj);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const updateRoleIdAction: any = createAsyncThunk(
  "CoursesRedux/updateRoleIdAction",
  async (
    payload: { id: string; roleId: string },
    { rejectWithValue }
  ): Promise<IUSERBYID | any> => {
    let { id, roleId } = payload;
    try {
      let res = await Courseservices.updateUserRole(id, roleId);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const updateCourseAction: any = createAsyncThunk(
  "CoursesRedux/updateCourseAction",
  async (
    payload: { Id: string; obj: IC },
    { rejectWithValue }
  ): Promise<ICOURSES | any> => {
    let { Id, obj } = payload;
    try {
      let res = await Courseservices.updateCourseById(Id, obj);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);
