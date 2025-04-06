import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./nowPlayingMovieSlice";
import languageMode from "./appConfigurationsSlice";
import GptSearch from "./gptFunctionalityData";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    language: languageMode,
    gptSearch: GptSearch,
   },
});

export default appStore;
