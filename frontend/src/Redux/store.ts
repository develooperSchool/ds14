import { Store, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const mystore: Store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});
export default mystore;

export type RootState = ReturnType<typeof mystore.getState>;
export type AppDispatch = typeof mystore.dispatch;
export const useAppDispath = () => useDispatch<AppDispatch>();
