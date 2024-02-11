import { createSlice } from "@reduxjs/toolkit";

const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    fontSize: "medium",
    reduceAnimations: false,
  },
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setReduceAnimations: (state, action) => {
      state.reduceAnimations = action.payload;
    },
  },
});

export const { setFontSize, setReduceAnimations } =
  userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
