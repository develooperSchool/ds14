import { createSlice } from "@reduxjs/toolkit";
import {
  IRevenueCategory,
  IIncome,
  IExpense,
} from "../../../src/components/Revenue/Model/IRevenue";
import * as RevenueAction from "../RevenueRedux/revenue.action";

export const revenueFeatureKey = "revenueFeature";

export interface InitialState {
  Rcategories: IRevenueCategory[];
  Rcategory: IRevenueCategory;
  Incomes: IIncome[];
  Income: IIncome;
  Expenses: IExpense[];
  Expense: IExpense;
}

const initialState: InitialState = {
  Rcategories: [] as IRevenueCategory[],
  Rcategory: {} as IRevenueCategory,
  Incomes: [] as IIncome[],
  Income: {} as IIncome,
  Expenses: [] as IExpense[],
  Expense: {} as IExpense,
};
export const revenueSlice = createSlice({
  name: "revenueSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ============================Revenue Reduder Start============================

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
    // ============================Revenue Reduder End============================

    // ============================Income Reduder Start============================
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
    // ============================Income Reduder End============================

    // ============================Expense Reduder Start============================
    builder.addCase(
      RevenueAction.getAllExpenseInfoAction.fulfilled,
      (state, action) => {
        state.Expenses = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.getExpenseInfoByIdAction.fulfilled,
      (state, action) => {
        state.Expense = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.addExpenseInfoAction.fulfilled,
      (state, action) => {
        state.Expense = action.payload;
      }
    );

    builder.addCase(
      RevenueAction.updateExpenseInfoByIdAction.fulfilled,
      (state, action) => {
        state.Expense = action.payload;
      }
    );
    builder.addCase(
      RevenueAction.deleteExpenseInfoByIdAction.fulfilled,
      (state, action) => {
        state.Expense = {} as IExpense;
      }
    );
    // ============================Expense Reduder Start============================
  },
});
