import { createSlice } from "@reduxjs/toolkit";
import products from "./products";
const initialState = {
  data: [],
  name: "Dipak Samadhan Mundhe",
  products,
  carts: [],
  showbox: [],
  login: [],
  signup: [],
  showcarts: [],
};

const ecomSlice = createSlice({
  name: "e-com",
  initialState,
  reducers: {
    showBox: (state, action) => {
      const newData = action.payload;
      state.showbox = [];
      state.showbox.push(newData);
    },
    addCart: (state, action) => {
      const newData = action.payload;
      state.carts.push(newData);
    },
    removeCart1: (state, action) => {
      const item = action.payload;
      state.carts = state.carts.filter((val) => {
      val.id !== item.id;
      });
    },
    vanishCart: (state, action) => {
      state.showbox = [];
    },
    logindata: (state, action) => {
      const newData = action.payload;
      state.login.push(newData);
    },
    signupdata: (state, action) => {
      state.signup = [];
      const newItem = action.payload;
      state.signup.push(newItem);
    },
    logout: (state, action) => {
      state.login = [];
      state.signup = [];
      state.carts = [];
    },
  },
});
export default ecomSlice.reducer;
export const {
  showBox,
  addCart,
  removeCart1,
  vanishCart,
  logindata,
  signupdata,
  logout,
} = ecomSlice.actions;
