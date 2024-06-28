import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetchCoinList is an action
export const fetchCoinList = createAsyncThunk("fetchCoinList", async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_localhost}/api/admin/coin/lazzyLoading`,
    {
      page: 1,
      itemPerPage: 10,
      sortColumn: "updatedAt",
    },
    {
      headers: {
        Authorization: `Bearer ` + `${process.env.REACT_APP_accessTokenAdmin}`,
        "x-refresh": `${process.env.REACT_APP_refreshTokenAdmin}`,
      },
    }
  );
  console.log("response");
  console.log(response.data.results);
  return response.data.results;
});

export const coinListSlice = createSlice({
  name: "coinlist",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoinList.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action");
      console.log(action);
      state.data = action.payload.data;
    });
    builder.addCase(fetchCoinList.rejected, (state, action) => {
      console.log("Error: ", action.payload);
      state.isError = true;
    });
  },
});
