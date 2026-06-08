import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  isLoggedIn: false,
  role: "",
  data: {},
};

export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Login successful");

    return {
      success: true,
      data,
    };
  } catch {
    toast.error("Something went wrong");

    return {
      success: false,
    };
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = "";
      state.data = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload.data;
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
