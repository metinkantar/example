import { createSlice } from "@reduxjs/toolkit";
import cookie from "cookie";

const userControl =
  typeof window !== "undefined" && localStorage.getItem("accessToken")
    ? {
        isLoggedIn: true,
        token: JSON.parse(localStorage.getItem("accessToken")),
      }
    : { isLoggedIn: false, token: null };

const user = userControl
  ? { isLoggedIn: userControl.isLoggedIn, token: userControl.token }
  : { isLoggedIn: false, token: null };

const initialState =
  typeof window !== "undefined" && localStorage.getItem("accessToken")
    ? {
        isLoggedIn: true,
        token: JSON.parse(localStorage.getItem("accessToken")),
      }
    : { isLoggedIn: false, token: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(window.document.cookie)
      const { isLoggedIn, token } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

