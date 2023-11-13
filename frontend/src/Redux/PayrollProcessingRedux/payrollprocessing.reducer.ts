import { createSlice } from "@reduxjs/toolkit";
import * as PayrollProcessingAction from "../../Redux/PayrollProcessingRedux/payrollprocessing.action";
import { IProcessing } from "../../components/Payroll Processing/Model/IProcessing";

export const processingFeatureKey = "processingFeatureKey";

export interface InitialState {
  processes: IProcessing[];
  process: IProcessing;
}

const initialState: InitialState = {
  processes: [] as IProcessing[],
  process: {} as IProcessing,
};

export const processingSlice = createSlice({
  name: "processingSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Payroll-Process
    builder.addCase(
      PayrollProcessingAction.getAllProcessingAction.fulfilled,
      (state, action) => {
        state.processes = action.payload;
      }
    );

    // Get Payroll-Process
    builder.addCase(
      PayrollProcessingAction.getProcessingAction.fulfilled,
      (state, action) => {
        state.process = action.payload;
      }
    );

    // Create Payroll-Process
    builder.addCase(
      PayrollProcessingAction.createProcessingAction.fulfilled,
      (state, action) => {
        state.process = action.payload;
      }
    );

    // Update Payroll-Process
    builder.addCase(
      PayrollProcessingAction.updateProcessingAction.fulfilled,
      (state, action) => {
        state.process = action.payload;
      }
    );

    // Delete Payroll-Process
    builder.addCase(
      PayrollProcessingAction.deleteProcessingAction.fulfilled,
      (state, action) => {
        state.process = {} as IProcessing;
      }
    );
  },
});
