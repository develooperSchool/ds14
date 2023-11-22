import { createSlice } from "@reduxjs/toolkit";
import * as SalaryAnnexureAction from "../../Redux/PayrollRedux/salaryAction";
import { SalaryAnnexure } from "../../components/Payroll/Model/SalaryAnnexure";

export const salaryfeatureKey = "salaryfeatureKey";

export interface InitialState {
  salaries: SalaryAnnexure[];
  salary: SalaryAnnexure;
}

const initialState: InitialState = {
  salaries: [] as SalaryAnnexure[],
  salary: {} as SalaryAnnexure,
};

export const salarySlice = createSlice({
  name: "salarySlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetAllSalary
    builder.addCase(
      SalaryAnnexureAction.getAllSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.salaries = action.payload;
      }
    );

    // Get Salary
    builder.addCase(
      SalaryAnnexureAction.getSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.salary = action.payload;
      }
    );

    // Create Salary
    builder.addCase(
      SalaryAnnexureAction.postSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.salary = action.payload;
      }
    );

    // Update Salary
    builder.addCase(
      SalaryAnnexureAction.updateSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.salary = action.payload;
      }
    );

    // Delete Salary
    builder.addCase(
      SalaryAnnexureAction.deleteSalaryAnnexureAction.fulfilled,
      (state, action) => {
        state.salary = {} as SalaryAnnexure;
      }
    );
  },
});
