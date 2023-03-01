import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  quantity: 0,
};

const cartItem = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      state.carts.push(action.payload);
    },

  },
});

export const { AddCart } = cartItem.actions;
export default cartItem.reducer;
