import { createSlice } from "@reduxjs/toolkit";

export interface UiStateType {
  notifcation: {
    success: boolean;
    title: string;
    message: string;
    show: boolean;
    duration: number;
  };
  nav: {
    show: boolean;
  };
}

const intialState: UiStateType = {
  notifcation: {
    success: false,
    title: "",
    message: "",
    show: false,
    duration: 3000,
  },
  nav: {
    show: document.body.clientWidth > 768 ? true : false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: intialState,
  reducers: {
    showNotification(
      state,
      action: {
        payload: {
          success: boolean;
          title: any;
          message: any;
          duration?: number;
        };
        type: string;
      }
    ) {
      const { success, title, message, duration } = action.payload;
      state.notifcation.success = success;
      state.notifcation.title = title;
      state.notifcation.message = message;
      state.notifcation.show = true;
      state.notifcation.duration = duration || 3000;
    },
    hideNotification(state) {
      state.notifcation.show = false;
    },
    showNav(state) {
      state.nav.show = true;
    },
    hideNav(state) {
      state.nav.show = false;
    },
    toggleNav(state) {
      state.nav.show = !state.nav.show;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
