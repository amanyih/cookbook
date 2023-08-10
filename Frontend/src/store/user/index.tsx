import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    followUser(state, action) {},
    unfollowUser(state, action) {},
    changePassword(state, action) {},
  },
});

export const userActions = userSlice.actions;
export default userSlice;
