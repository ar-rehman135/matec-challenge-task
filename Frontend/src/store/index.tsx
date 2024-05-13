// store.js
import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./image-slice";

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof imageReducer>;

export default store;
