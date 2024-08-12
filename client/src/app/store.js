import { configureStore } from "@reduxjs/toolkit";
import ecomReducer from '../features/ecomSlice'
const store = configureStore({
    reducer:ecomReducer
});

export default store;