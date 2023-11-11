import { createSlice } from "@reduxjs/toolkit";
import { Iurole } from "../../components/Urole/Model/Iurole";
import * as UroleAction from "../UroleRedux/urole.action"

export const uroleFeatureKey = "uroleFeature";
export interface InitialState{
    uroles: Iurole[],
    urole: Iurole
}
const State:InitialState = {
    uroles:[] as Iurole[],
    urole: {} as Iurole
  };

  export const uroleSlice = createSlice({
    name: "uroleSlice",
    initialState:State,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        UroleAction.getAllRolesAction.fulfilled,
        (state, action) => {
          state.uroles = action.payload;
        }
      );
  
      
    },
  });
  