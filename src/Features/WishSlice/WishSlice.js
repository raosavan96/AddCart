import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const wishSlice = createSlice({
  name: "wish products",
  initialState,
  reducers: {
    wishFun: (state, action) => {
      const wishItems = state.value.findIndex(
        (value) => value.id === action.payload.id
      );

      if (wishItems === -1) {
        state.value.push({ ...action.payload, checkItem: "false" });
      }
    },

    wishDelete: (state, action) => {
      state.value = state.value.filter((value) => value.id !== action.payload);
    }
  }
});

export const { wishFun, wishDelete } = wishSlice.actions;
export default wishSlice.reducer;
