import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("productscart")) || [],
  totalPrice: 0,
  totalQuantity: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartFun: (state, action) => {
      const find = state.value.findIndex(
        (value) => value.id === action.payload.id
      );

      if (find != -1) {
        state.value[find] = {
          ...state.value[find],
          quantity: state.value[find].quantity + 1
        };
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("productscart", JSON.stringify(state.value));
    },
    deleteFun: (state, action) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
      localStorage.setItem("productscart", JSON.stringify(state.value));
    },
    increItems: (state, action) => {
      const find = state.value.findIndex(
        (value) => value.id === action.payload.id
      );

      if (find !== -1) {
        state.value[find].quantity = action.payload.quantity;
        localStorage.setItem("productscart", JSON.stringify(state.value));
      }
    },
    decremItems: (state, action) => {
      let decreFind = state.value.findIndex(
        (value) => value.id === action.payload.id
      );

      if (decreFind !== -1) {
        state.value[decreFind].quantity = action.payload.quantity;
        localStorage.setItem("productscart", JSON.stringify(state.value));
      }
    },
    cartTotalItem: (state) => {
      const { totalPrice, totalQuantity } = state.value.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem)
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0
        }
      );
      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
    }
  }
});

export const { cartFun, deleteFun, increItems, decremItems, cartTotalItem } =
  cartSlice.actions;
export default cartSlice.reducer;
