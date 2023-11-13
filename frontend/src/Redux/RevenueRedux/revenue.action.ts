//Get all revenue action

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAddRevenueCategory,
  IRevenueCategory,
} from "../../../src/components/Revenue/Model/IRevenue";
import { RevenueService } from "../../components/Revenue/Services/revenueService";

export const getAllRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/getAllRevenueCategoryAction",
  async (
    payload: {},
    { rejectWithValue }
  ): Promise<IRevenueCategory[] | any> => {
    try {
      let res = await RevenueService.getAllRevenueCategory();
      return res.data;
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
      return res.data[0];
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
      let res = await RevenueService.addRevenueCategory(body);
      return res.data;
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
    payload: { data: IAddRevenueCategory; id: string },
    { rejectWithValue }
  ): Promise<IRevenueCategory[] | any> => {
    try {
      const { data, id } = payload;
      let res = await RevenueService.updateRevenueCategory(data, id);
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
