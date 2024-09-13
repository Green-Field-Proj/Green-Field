import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  role: null,
  userName: null,
  email: null,
  profilePicture: null,
  isLoading: false,
  error: null,
  successMessage: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error, "erooooooooooor here");
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/user/check", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(
        "http://localhost:3000/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.role;
        state.successMessage = action.payload.message;
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.profilePicture = action.payload.profilePicture;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(checkStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.role;
        state.userName = action.payload.username;
        state.email = action.payload.email;
        state.profilePicture = action.payload.profileImage;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.role = null;
        state.userName = null;
        state.email = null;
        state.profilePicture = null;
        state.error = null;
        state.successMessage = "Logged out successfully";
      });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
