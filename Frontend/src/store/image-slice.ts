// urlSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ImagesState } from "../utils/interface";
import { getImages } from "../api";

// Define the initial state
const initialState = {
  images: [],
  status: "idle",
  error: "",
};

// Define the thunk for fetching URLs
export const fetchImages = createAsyncThunk("urls/fetchUrls", () =>
  getImages()
);

// Define the slice
const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state: ImagesState, action) => {
        state.status = "idle";
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state: ImagesState, action) => {
        state.status = "idle";
        state.error = action.error.message || "Error fetching images";
      });
  },
});

export default imagesSlice.reducer;
