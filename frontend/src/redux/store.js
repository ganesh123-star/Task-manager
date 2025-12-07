// src/redux/store.js
/*import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
  },
});
*/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
  },
});

export default store;
