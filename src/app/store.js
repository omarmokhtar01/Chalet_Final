import { configureStore } from "@reduxjs/toolkit";
import allChaletReducer from "../features/allChalet/allChaletSlice";
import authReducer from "../features/Auth/AuthSlicle";

const store = configureStore({
  reducer: {
    AllChalet:allChaletReducer,
    auth:authReducer,
  },
});

export default store;