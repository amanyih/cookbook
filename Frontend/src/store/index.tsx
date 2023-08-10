import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter";
import categorySlice from "./category";
import recipeSlice from "./recipe";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    category: categorySlice.reducer,
    recipe: recipeSlice.reducer,
    user: userSlice.reducer,
  },
});

export interface StateInterface {
  filter: {
    chips: string[];
  };
  recipe: {};
}

export default store;
