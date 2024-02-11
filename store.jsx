import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./redux/themeSlice";
import userPreferencesReducer from "./redux/userPreferencesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    userPreferences: userPreferencesReducer,
  },
});
