import { createSlice } from "@reduxjs/toolkit";

export interface ImageStateType {
  image: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: ImageStateType = {
  image: null,
  loading: false,
  error: false,
};

const imageSlice = createSlice({
  name: "image",
  initialState: initialState,
  reducers: {
    image: (
      state,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.loading = false;
      state.error = false;
      state.image = action.payload["url"];
    },
    imageLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    imageError: (state) => {
      state.loading = false;
      state.image = null;
      state.error = true;
    },
    resetImage: (state) => {
      state.loading = false;
      state.image = null;
      state.error = false;
    },
  },
});

export const imageActions = imageSlice.actions;

export default imageSlice;
