import { createSlice } from "@reduxjs/toolkit";

const appLanguageMode = createSlice({
  name: "languageMode",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = appLanguageMode.actions;
export default appLanguageMode.reducer;
