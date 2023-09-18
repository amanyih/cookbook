import { createSlice } from "@reduxjs/toolkit";
import { CategoryListDto } from "../../types";
import { Dispatch } from "@reduxjs/toolkit";

const intialCategory: CategoryStateType = {
  allcategory: {
    list: [],
    loading: false,
    error: null,
  },
  origins: {
    list: [],
    loading: false,
    error: null,
  },
  mealCourses: {
    list: [],
    loading: false,
    error: null,
  },
  dishTypes: {
    list: [],
    loading: false,
    error: null,
  },
  diet: {
    list: [],
    loading: false,
    error: null,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState: intialCategory,
  reducers: {
    getallcategories(state, action) {
      state.allcategory.list = action.payload;
      state.allcategory.loading = false;
      state.allcategory.error = null;
    },
    getallcategoriesFailed(state, action) {
      state.allcategory.list = [];
      state.allcategory.loading = false;
      state.allcategory.error = action.payload;
    },
    getallcategoriesLoading(state) {
      state.allcategory.list = [];
      state.allcategory.loading = true;
      state.allcategory.error = null;
    },
    getOrigins(state, action) {
      state.origins.list = action.payload;
      state.origins.loading = false;
      state.origins.error = null;
    },
    getOriginsFailed(state, action) {
      state.origins.list = [];
      state.origins.loading = false;
      state.origins.error = action.payload;
    },
    getOriginsLoading(state) {
      state.origins.list = [];
      state.origins.loading = true;
      state.origins.error = null;
    },
    getMealCourses(state, action) {
      state.mealCourses.list = action.payload;
      state.mealCourses.loading = false;
      state.mealCourses.error = null;
    },
    getMealCoursesFailed(state, action) {
      state.mealCourses.list = [];
      state.mealCourses.loading = false;
      state.mealCourses.error = action.payload;
    },
    getMealCoursesLoading(state) {
      state.mealCourses.list = [];
      state.mealCourses.loading = true;
      state.mealCourses.error = null;
    },
    getDishTypes(state, action) {
      state.dishTypes.list = action.payload;
      state.dishTypes.loading = false;
      state.dishTypes.error = null;
    },
    getDishTypesFailed(state, action) {
      state.dishTypes.list = [];
      state.dishTypes.loading = false;
      state.dishTypes.error = action.payload;
    },
    getDishTypesLoading(state) {
      state.dishTypes.list = [];
      state.dishTypes.loading = true;
      state.dishTypes.error = null;
    },
    getDiet(state, action) {
      state.diet.list = action.payload;
      state.diet.loading = false;
      state.diet.error = null;
    },
    getDietFailed(state, action) {
      state.diet.list = [];
      state.diet.loading = false;
      state.diet.error = action.payload;
    },
    getDietLoading(state) {
      state.diet.list = [];
      state.diet.loading = true;
      state.diet.error = null;
    },

    reset(state) {
      state = intialCategory;
    },
  },
});

export interface CategoryStateType {
  allcategory: {
    list: CategoryListDto[];
    loading: boolean;
    error: string | null;
  };
  origins: {
    list: CategoryListDto[];
    loading: boolean;
    error: string | null;
  };
  mealCourses: {
    list: CategoryListDto[];
    loading: boolean;
    error: string | null;
  };
  dishTypes: {
    list: CategoryListDto[];
    loading: boolean;
    error: string | null;
  };
  diet: {
    list: CategoryListDto[];
    loading: boolean;
    error: string | null;
  };
}

export const categoryActions = categorySlice.actions;
export default categorySlice;
