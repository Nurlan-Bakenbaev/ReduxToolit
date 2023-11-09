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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    deleteOneItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    subsractItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if (cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      }

    },
  },
});
export const { clearCart, deleteOneItem, addItem, subsractItem } =
  cartSlice.actions;
export default cartSlice.reducer;
