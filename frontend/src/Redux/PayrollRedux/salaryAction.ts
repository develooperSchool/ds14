// salaryAnnexureActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SalaryAnnexureService } from "../../components/Payroll/Services/salaryAnnexureService";
import {
  SalaryAnnexure,
  SalaryAnnexureUpdate,
} from "../../components/Payroll/Model/SalaryAnnexure";

export const getAllSalaryAnnexureAction: any = createAsyncThunk(
  "PayrollRedux/getAllSalaryAnnexureAction",
  async (payload: {}, { rejectWithValue }): Promise<SalaryAnnexure[] | any> => {
    try {
      let res = await SalaryAnnexureService.fetchSalaryAnnexures();
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// GetSalary
export const getSalaryAnnexureAction: any = createAsyncThunk(
  "PayrollRedux/getSalaryAnnexureAction",
  async (
    payload: { Id: number },
    { rejectWithValue }
  ): Promise<SalaryAnnexure | any> => {
    try {
      const { Id } = payload;

      let res = await SalaryAnnexureService.getSalaryAnnexureById(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const postSalaryAnnexureAction: any = createAsyncThunk(
  "PayrollRedux/postSalaryAnnexure",
  async (
    payload: { body: SalaryAnnexure },
    { rejectWithValue }
  ): Promise<SalaryAnnexure[] | any> => {
    try {
      const { body } = payload;

      let res = await SalaryAnnexureService.addSalaryAnnexure(body);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

// Update Salary
export const updateSalaryAnnexureAction: any = createAsyncThunk(
  "PayrollRedux/updateSalaryAnnexureAction",
  async (
    payload: { updatesalaryannexure: SalaryAnnexureUpdate; Id: number },
    { rejectWithValue }
  ): Promise<SalaryAnnexure[] | any> => {
    try {
      const { updatesalaryannexure, Id } = payload;

      let res = await SalaryAnnexureService.updateSalaryAnnexure(
        updatesalaryannexure,
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

export const deleteSalaryAnnexureAction: any = createAsyncThunk(
  "PayrollRedux/deleteSalaryAction",
  async (
    payload: { Id: number },
    { rejectWithValue }
  ): Promise<SalaryAnnexure | any> => {
    try {
      const { Id } = payload;
      let res = await SalaryAnnexureService.deleteSalaryAnnexure(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
