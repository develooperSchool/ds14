import { createSlice } from "@reduxjs/toolkit";
import {
  IRevenueCategory,
  IIncome,
} from "../../../src/components/Revenue/Model/IRevenue";
import * as RevenueAction from "../RevenueRedux/revenue.action";

export const revenueFeatureKey = "revenueFeature";

export interface InitialState {
  Rcategories: IRevenueCategory[];
  Rcategory: IRevenueCategory;
  Incomes: IIncome[];
  Income: IIncome;
}

const initialState: InitialState = {
  Rcategories: [] as IRevenueCategory[],
  Rcategory: {} as IRevenueCategory,
  Incomes: [] as IIncome[],
  Income: {} as IIncome,
};
export const revenueSlice = createSlice({
  name: "revenueSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ============================Revenue Action Start============================

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
    // ============================Revenue Action End============================

    // ============================Income Action Start============================
    builder.addCase(
      RevenueAction.getAllIncomeInfoAction.fulfilled,
      (state, action) => {
        state.Incomes = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.getIncomeInfoByIdAction.fulfilled,
      (state, action) => {
        state.Income = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.addIncomeInfoAction.fulfilled,
      (state, action) => {
        state.Income = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.updateIncomeInfoByIdAction.fulfilled,
      (state, action) => {
        state.Income = action.payload;
      }
    );
    builder.addCase(
      RevenueAction.deleteIncomeInfoByIdAction.fulfilled,
      (state, action) => {
        state.Income = {} as IIncome;
      }
    );
    // ============================Income Action End============================
  },
});
