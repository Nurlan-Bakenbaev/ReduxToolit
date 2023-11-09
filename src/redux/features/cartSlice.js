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
    calculateNewValue: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((el) => {
        amount += el.amount;
        total += el.amount * el.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { calculateNewValue,clearCart, deleteOneItem, addItem, subsractItem, } =
  cartSlice.actions;
export default cartSlice.reducer;
