import { createSlice } from "@reduxjs/toolkit";

interface filterAction {
  payload: string;
  type: string;
}

export interface FilterStateType {
  chips: string[];
}

const initialChips: FilterStateType = {
  chips: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialChips,
  reducers: {
    addChip(state, action: filterAction) {
      const chip: string = action.payload;
      state.chips.push(chip);
    },
    removeChip(state, action: filterAction) {
      const chip = action.payload;
      state.chips = state.chips.filter((item) => chip !== item);
    },
  },
});
export const filterActions = filterSlice.actions;

export default filterSlice;
