import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { registerUser } from "./thunks/registerUser";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { registerUser, store };
