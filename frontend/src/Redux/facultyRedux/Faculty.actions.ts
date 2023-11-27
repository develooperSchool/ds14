import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IFACULTY,
  ISUBJECTS,
  IUSER,
  IUSERBYID,
} from "../../components/Faculty/Model/Ifaculty";
import { facultyServices } from "../../components/Faculty/Services/FacultyServices";

export const getAllFacultyAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/getAllFacultyAction",
  async (payload: {}, { rejectWithValue }): Promise<IUSER[] | any> => {
    try {
      let res = await facultyServices.getAllFacultyData();
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getFacultyAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/getFacultyAction",
  async (payload: {}, { rejectWithValue }): Promise<IUSERBYID[] | any> => {
    try {
      let res = await facultyServices.getAllFaculty();
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getSubjectsAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/getSubjectsAction",
  async (payload: {}, { rejectWithValue }): Promise<ISUBJECTS[] | any> => {
    try {
      let res = await facultyServices.getAllSubjects();
      console.log(res);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const getFacultyByIdAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/getFacultyByIdAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IUSERBYID[] | any> => {
    const { Id } = payload;
    try {
      let res = await facultyServices.getFacultyDataById(Id);
      return res.data.body;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const assignFacultyAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/assignFacultyAction",
  async (
    payload: { obj: IFACULTY },
    { rejectWithValue }
  ): Promise<IFACULTY | any> => {
    let { obj } = payload;
    console.log(obj);
    try {
      let res = await facultyServices.assignFaculty(obj);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);

export const deleteFacultyAction: any = createAsyncThunk(
  "facultyRedux/Faculty.actions/deleteFacultyAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IFACULTY | any> => {
    let { Id } = payload;
    try {
      let res = await facultyServices.DeleteFacultyById(Id);
      return res.data;
    } catch (err: any) {
      if (!err.res) {
        throw err;
      }
      return rejectWithValue(err.res.data);
    }
  }
);
