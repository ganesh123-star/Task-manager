// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, getProfile } from "../api/userApi";

export const registerAction = createAsyncThunk("user/register", async (data) => {
  const res = await registerUser(data);
  return res.data;
});

export const loginAction = createAsyncThunk("user/login", async (data) => {
  const res = await loginUser(data);
  return res.data;
});

export const profileAction = createAsyncThunk("user/profile", async () => {
  const res = await getProfile();
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,
    loading: false,
  },
  reducers: {
    logout(state) {
      state.info = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(profileAction.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
