import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import testReducer from "./slices/TestSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
  },
});

export default store;
