import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  isLoggedIn: false,
  role: "",
  data: {},
};

export const createAccount = createAsyncThunk(
  "/auth/signup",
  async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Account created successfully");

      return {
        success: true,
        message: "Account created successfully",
        data,
      };
    } catch {
      toast.error("Something went wrong");
      return {
        success: false,
      };
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;