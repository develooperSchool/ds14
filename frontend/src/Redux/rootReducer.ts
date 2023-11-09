import { combineReducers } from "@reduxjs/toolkit";

import * as RevenueReducer from "./RevenueRedux/revenue.reducer";
import * as UserReducer from "./UserRedux/user.reducer";

const rootReducer: any = combineReducers({
  [RevenueReducer.revenueFeatureKey]: RevenueReducer.revenueSlice.reducer,
  [UserReducer.userFeatureKey]: UserReducer.userSlice.reducer,
});

export default rootReducer;
