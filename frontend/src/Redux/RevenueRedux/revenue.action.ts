//Get all revenue action

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAddRevenueCategory,
  IRevenueCategory,
  IIncome,
} from "../../../src/components/Revenue/Model/IRevenue";
import { RevenueService } from "../../components/Revenue/Services/revenueService";

export const getAllRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/getAllRevenueCategoryAction",
  async (
    payload: {},
    { rejectWithValue }
  ): Promise<IRevenueCategory[] | any> => {
    try {
      let res: any = await RevenueService.getAllRevenueCategory();
      // console.log("getall", res.data.body);
      return res.data.body;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const getRevenueCategoryByIdAction: any = createAsyncThunk(
  "RevenueRedux/getRevenueCategoryByIdAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IRevenueCategory | any> => {
    try {
      const { id } = payload;
      let res: any = await RevenueService.getRevenueCategoryById(id);
      return res.data.body[0];
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const addRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/addRevenueCategoryAction",
  async (
    payload: { body: IRevenueCategory },
    { rejectWithValue }
  ): Promise<IRevenueCategory | any> => {
    try {
      const { body } = payload;
      let res: any = await RevenueService.addRevenueCategory(body);
      return res.data.description;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const updateRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/updateRevenueCategoryAction",
  async (
    payload: { updateData: IAddRevenueCategory; id: string },
    { rejectWithValue }
  ): Promise<IRevenueCategory[] | any> => {
    try {
      const { updateData, id } = payload;
      let res = await RevenueService.updateRevenueCategory(updateData, id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const deleteRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/deleteRevenueCategoryAction",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IRevenueCategory | any> => {
    try {
      const { id } = payload;
      let res = await RevenueService.deleteRevenueCategory(id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const getAllIncomeInfoAction: any = createAsyncThunk(
  "RevenueRedux/getAllIncomeInfoAction",
  async (payload: {}, { rejectWithValue }): Promise<IIncome[] | any> => {
    try {
      let res: any = await RevenueService.getAllIncomeInfo();
      // console.log("getall action", res.data.body);
      return res.data.body;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const getIncomeInfoByIdAction: any = createAsyncThunk(
  "RevenueRedux/getIncomeInfoByIdByIdAction",
  async (
    payload: { incomeId: number },
    { rejectWithValue }
  ): Promise<IIncome | any> => {
    try {
      const { incomeId } = payload;
      let res: any = await RevenueService.getIncomeInfoById(incomeId);
      return res.data.body[0];
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const addIncomeInfoAction: any = createAsyncThunk(
  "RevenueRedux/addIncomeInfoAction",
  async (
    payload: { body: IIncome },
    { rejectWithValue }
  ): Promise<IIncome | any> => {
    try {
      const { body } = payload;
      let res: any = await RevenueService.addIncomeInfo(body);
      return res.data.description;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
export const updateIncomeInfoByIdAction: any = createAsyncThunk(
  "RevenueRedux/updateIncomeInfoByIdAction",
  async (
    payload: { updateData: IIncome; incomeId: number },
    { rejectWithValue }
  ): Promise<IIncome[] | any> => {
    try {
      const { updateData, incomeId } = payload;
      let res = await RevenueService.updateIncomeInfoById(updateData, incomeId);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const deleteIncomeInfoByIdAction: any = createAsyncThunk(
  "RevenueRedux/deleteIncomeInfoByIdAction",
  async (
    payload: { incomeId: number },
    { rejectWithValue }
  ): Promise<IIncome | any> => {
    try {
      const { incomeId } = payload;
      let res = await RevenueService.deleteIncomeInfoById(incomeId);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
