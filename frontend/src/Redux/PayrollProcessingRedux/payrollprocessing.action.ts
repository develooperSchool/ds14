import { createAsyncThunk } from "@reduxjs/toolkit";
import { Payrollprocessingservices } from "../../components/Payroll Processing/Services/payrollProcessingService";
import {
  IProcessing,
  IUpdateProcessing,
} from "../../components/Payroll Processing/Model/IProcessing";

export const getAllProcessingAction: any = createAsyncThunk(
  "PayrollProcessingRedux/getAllProcessingAction",
  async (payload: {}, { rejectWithValue }): Promise<IProcessing[] | any> => {
    try {
      let res = await Payrollprocessingservices.getAllprocessing();
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Get Payroll-Processing
export const getProcessingAction: any = createAsyncThunk(
  "PayrollProcessingRedux/getProcessingAction",
  async (
    payload: { Id: number },
    { rejectWithValue }
  ): Promise<IProcessing | any> => {
    try {
      const { Id } = payload;

      let res = await Payrollprocessingservices.getProcessingById(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Create Payroll-Processing
export const createProcessingAction: any = createAsyncThunk(
  "PayrollProcessingRedux/createProcessingAction",
  async (
    payload: { body: IProcessing },
    { rejectWithValue }
  ): Promise<IProcessing[] | any> => {
    try {
      const { body } = payload;

      let res = await Payrollprocessingservices.createProcessing(body);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Update Payroll-Processing
export const updateProcessingAction: any = createAsyncThunk(
  "PayrollProcessingRedux/updateProcessingAction",
  async (
    payload: { updateprocess: IUpdateProcessing; Id: number },
    { rejectWithValue }
  ): Promise<IProcessing[] | any> => {
    try {
      const { updateprocess, Id } = payload;

      let res = await Payrollprocessingservices.updateProcessing(
        updateprocess,
        Id
      );
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Delete Payroll-Processing
export const deleteProcessingAction: any = createAsyncThunk(
  "PayrollProcessingRedux/deleteProcessingAction",
  async (
    payload: { Id: number },
    { rejectWithValue }
  ): Promise<IProcessing | any> => {
    try {
      const { Id } = payload;

      let res = await Payrollprocessingservices.getDelete(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
