import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
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
    },
    deleteFun: (state, action) => {
      const deleteItem = state.value.findIndex(
        (value) => value.id === action.payload
      );
      if (deleteItem !== -1) {
        state.value.splice(deleteItem, 1);
      }
    }
  }
});

export const { cartFun, deleteFun } = cartSlice.actions;
export default cartSlice.reducer;
