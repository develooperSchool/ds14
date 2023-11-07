import { combineReducers } from "@reduxjs/toolkit";

import * as UserReducer from "./UserRedux/user.reducer";

const rootReducer: any = combineReducers({
  [UserReducer.userFeatureKey]: UserReducer.userSlice.reducer,
});

export default rootReducer;
