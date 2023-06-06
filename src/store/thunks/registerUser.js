import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const registerUser = createAsyncThunk("user/regiser", async (registerData) => {
  const response = await axios.post("http://localhost:3005/user", registerData);

  return response.data;
});
export { registerUser };
