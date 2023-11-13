import { createSlice } from "@reduxjs/toolkit";
import { IRevenueCategory } from "../../../src/components/Revenue/Model/IRevenue";
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

    builder.addCase(
      RevenueAction.addRevenueCategoryAction.fulfilled,
      (state, action) => {
        state.Rcategory = action.payload;
      }
    );
    builder.addCase(
      RevenueAction.getRevenueCategoryByIdAction.fulfilled,
      (state, action) => {
        state.Rcategory = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.updateRevenueCategoryAction.fulfilled,
      (state, action) => {
        state.Rcategory = action.payload;
      }
    );
    builder.addCase(
      RevenueAction.deleteRevenueCategoryAction.fulfilled,
      (state, action) => {
        state.Rcategory = {} as IRevenueCategory;
      }
    );
  },
});
