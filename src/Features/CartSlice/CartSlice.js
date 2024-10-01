import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("productscart")) || []
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
          qunatity: state.value[find].qunatity + 1
        };
      } else {
        state.value.push({ ...action.payload, qunatity: 1 });
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
        state.value[find].qunatity = action.payload.qunatity;
        localStorage.setItem("productscart", JSON.stringify(state.value));
      }
    },
    decremItems: (state, action) => {
      let decreFind = state.value.findIndex(
        (value) => value.id === action.payload.id
      );

      if (decreFind !== -1) {
        state.value[decreFind].qunatity = action.payload.qunatity;
        localStorage.setItem("productscart", JSON.stringify(state.value));
      }
    }
  }
});

export const { cartFun, deleteFun, increItems, decremItems } =
  cartSlice.actions;
export default cartSlice.reducer;
