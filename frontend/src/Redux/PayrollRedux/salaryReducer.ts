import { createSlice } from "@reduxjs/toolkit";
import * as SalaryAnnexureAction from "../../Redux/PayrollRedux/salaryAction";
import { SalaryAnnexure } from "../../components/Payroll/Model/SalaryAnnexure";

export const payrollFeatureKey = "payrollFeatureKey";

export interface InitialState {
  payrolls: SalaryAnnexure[];
  payroll: SalaryAnnexure;
}

const initialState: InitialState = {
  payrolls: [] as SalaryAnnexure[],
  payroll: {} as SalaryAnnexure,
};

export const payrollSlice = createSlice({
  name: "payrollSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetAllSalary
    builder.addCase(
      SalaryAnnexureAction.getAllSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.payrolls = action.payload;
      }
    );

    // Get Salary
    builder.addCase(
      SalaryAnnexureAction.getSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.payroll = action.payload;
      }
    );

    // Create Salary
    builder.addCase(
      SalaryAnnexureAction.postSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.payroll = action.payload;
      }
    );

    // Update Salary
    builder.addCase(
      SalaryAnnexureAction.updateSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.payroll = action.payload;
      }
    );

    // Delete Salary
    builder.addCase(
      SalaryAnnexureAction.deleteSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.payroll = {} as SalaryAnnexure;
      }
    );
  },
});
