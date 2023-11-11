import { combineReducers } from "@reduxjs/toolkit";

import * as RevenueReducer from "./RevenueRedux/revenue.reducer";
import * as UroleReducer from "./UroleRedux/urole.reducer"
const rootReducer: any = combineReducers({
  [RevenueReducer.revenueFeatureKey]: RevenueReducer.revenueSlice.reducer,
  [UroleReducer.uroleFeatureKey]: UroleReducer.uroleSlice.reducer,
});

export default rootReducer




