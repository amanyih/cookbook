import { createSlice } from "@reduxjs/toolkit";
import RecipeDto from "../../types/dtos/recipe/recipe.dto";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {},
  reducers: {
    likeRecipe(state, action) {},
    dislikeRecipe(state, action) {},
    viewCount(state, action) {},
    createRecipe(state, action: { payload: RecipeDto; type: string }) {
      console.log("in recipe slice");
      // console.log(JSON.stringify(action.payload));
      console.log(action.payload);
    },
    editRecipe(state, action) {},
    deleteRecipe(state, action) {},
    getAllRecipe(state, action) {},
  },
});

export const recipeActions = recipeSlice.actions;
export default recipeSlice;
