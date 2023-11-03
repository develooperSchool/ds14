import { createSlice } from "@reduxjs/toolkit";
import { IRevenueCategory } from "../../Model/IRevenue";
import * as RevenueAction from "../RevenueRedux/revenue.action";

export const revenueFeatureKey = "revenueFeature";

export interface InitialState {
  Rcategories: IRevenueCategory[];
  Rcategory: IRevenueCategory;
}

const initialState: InitialState = {
  Rcategories: [] as IRevenueCategory[],
  Rcategory: {} as IRevenueCategory,
};
export const revenueSlice = createSlice({
  name: "revenueSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      RevenueAction.getAllRevenueCategoryAction.fulfilled,
      (state, action) => {
        state.Rcategories = action.payload;
      }
    );
  },
});
