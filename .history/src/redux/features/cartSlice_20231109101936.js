import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{clearCart:(state)}
});
export default cartSlice.reducer;
  