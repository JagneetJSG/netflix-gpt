import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./nowPlayingMovieSlice";
import languageMode from "./appConfigurationsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    language: languageMode,
  },
});

export default appStore;
