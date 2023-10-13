import { createSlice } from "@reduxjs/toolkit";
import { OrderData } from "../../data/OrderData";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: OrderData.products,
  },
  reducers: {
    changeStatus: (state, action) => {
      let itemId = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemId >= 0) {
        state.cartItems[itemId].status = action.payload.status;
      }
    },
  },
});

export const { changeStatus } = cartSlice.actions;
export default cartSlice.reducer;
