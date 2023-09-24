import { createSlice } from '@reduxjs/toolkit';
import { createUser, logIn, logOut, getCurrentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleAuthUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const handleGetCurrentUserPending = state => {
  state.isLoggedIn = false;
  state.isRefreshing = true;
};
const handleGetCurrentUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleGetCurrentUserRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(createUser.fulfilled, handleAuthUser)
      .addCase(logIn.fulfilled, handleAuthUser)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(getCurrentUser.pending, handleGetCurrentUserPending)
      .addCase(getCurrentUser.fulfilled, handleGetCurrentUser)
      .addCase(getCurrentUser.rejected, handleGetCurrentUserRejected),
});

export const authReducer = authSlice.reducer;