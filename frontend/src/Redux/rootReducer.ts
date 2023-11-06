import { combineReducers } from "@reduxjs/toolkit";

import * as RevenueReducer from "./RevenueRedux/revenue.reducer";

const rootReducer: any = combineReducers({
  [RevenueReducer.revenueFeatureKey]: RevenueReducer.revenueSlice.reducer,
});

export default rootReducer;
