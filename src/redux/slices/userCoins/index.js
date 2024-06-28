import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersWithCoins = createAsyncThunk(
  "fetchUsersWithCoins",
  async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_localhost}/api/admin/user/getUsersWithCoinDetails`,
      {}
      //   {
      //     headers: {
      //       Authorization:
      //         `Bearer ` + `${process.env.REACT_APP_accessTokenAdmin}`,
      //       "x-refresh": `${process.env.REACT_APP_refreshTokenAdmin}`,
      //     },
      //   }
    );
    // console.log("Userswtihcoins response:");
    // console.log(res.data.results);
    return res.data.results;
  }
);

export const UsersWithCoinsSlice = createSlice({
  name: "usersWithCoins",
  initialState: {
    isLoading: false,
    data: null,
    Error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersWithCoins.pending, (state, action) => {
      state.isLoading = true;
      state.Error = null;
    });
    builder.addCase(fetchUsersWithCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action");
      console.log(action);
      state.data = action.payload;
      console.log(state.data, "sate.data");
    });
    builder.addCase(fetchUsersWithCoins.rejected, (state, action) => {
      console.log("fetchCoinList.rejected Error: ", action.payload);
      state.isLoading = false;
      state.Error = action.error.message;
    });
  },
});
