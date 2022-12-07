import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        // Returns
        // num > 0 item is present in cart
        // -1 if item is not added to cart
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        //Item exist in cart
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);

        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }

      // add cartItems to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
