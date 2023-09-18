import { createSlice } from "@reduxjs/toolkit";
import { ProfileDto } from "../../types";

export interface ProfileStateType {
  profile: ProfileDto | null;
  loading: boolean;
  error: boolean;
}

const initialState: ProfileStateType = {
  profile: null,
  loading: false,
  error: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    profile: (
      state,
      action: {
        payload: ProfileDto;
        type: string;
      }
    ) => {
      state.loading = false;
      state.error = false;
      state.profile = action.payload;
    },
    profileLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    profileError: (state) => {
      state.loading = false;
      state.profile = null;
      state.error = true;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
