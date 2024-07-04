import { createSlice } from "@reduxjs/toolkit";

export const RealTimePriceSlice = createSlice({
  name: "realTimePriceSlice",
  initialState: {
    data: null,
  },
  reducers: {
    updateRealTimePrice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateRealTimePrice } = RealTimePriceSlice.actions;
