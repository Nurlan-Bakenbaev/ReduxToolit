import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
const store = configureStore({
  reducer: {},
});
export default store;
