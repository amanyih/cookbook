import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";

const intialCategory = {
  category: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState: intialCategory,
  reducers: {
    getCategories(state) {},
  },
});

const getAllCategories = () => {
  return (dispatch: Dispatch) => {
    dispatch(categoryActions.getCategories());
  };
};

export const categoryActions = categorySlice.actions;
export default categorySlice;
