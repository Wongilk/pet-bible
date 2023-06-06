import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../thunks/registerUser";
import { loginUser } from "../thunks/loginUser";
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    registerSuccess: false,
    loginSuccess: false,
  },
  //reducer에서 user state 변경
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.fulfilled,
      (state, action) => {
        console.log(action.payload);
        state.registerSuccess = true;
      },
      builder.addCase(registerUser.rejected, (state, action) => {})
    );
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginSuccess = true;
    });
  },
});

export const userReducer = userSlice.reducer;
