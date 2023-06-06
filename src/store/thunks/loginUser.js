import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const loginUser = createAsyncThunk("user/login", async (loginData) => {
  const response = await axios.post("http://localhost:3005/user", loginData);

  return response.data;
});
export { loginUser };
