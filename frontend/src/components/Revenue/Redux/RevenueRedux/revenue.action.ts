//Get all revenue action

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRevenueCategory } from "../../Model/IRevenue";
import { RevenueService } from "../../Services/revenueService";

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

export const deleteRevenueCategoryAction: any = createAsyncThunk(
  "RevenueRedux/deleteRevenueCategoryAction",
  async (
    payload: { Id: string },
    { rejectWithValue }
  ): Promise<IRevenueCategory | any> => {
    try {
      const { Id } = payload;
      let res = await RevenueService.deleteRevenueCategory(Id);
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);
