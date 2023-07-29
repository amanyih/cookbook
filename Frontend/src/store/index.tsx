import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
