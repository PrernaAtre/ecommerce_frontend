import { setToken } from "@/utils/AuthToken";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  currentUser: null | Record<string, any>;
} = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      console.log("token in reduxer-------", state?.currentUser?.token);
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentUser, removeCurrentUser, updateCurrentUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
