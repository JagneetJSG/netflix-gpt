import { createSlice } from "@reduxjs/toolkit";

const GPTFunctionalityData = createSlice({
  name: "GPTFunctionalityData",
  initialState: {
    gptNames: null,
    tmdbGptMovies: null,
  },
  reducers: {
    addGPTSuggestedMovies: (state, action) => {
      const { GptRecommendedMovies, moviesData } = action.payload;
      state.gptNames = GptRecommendedMovies;
      state.tmdbGptMovies = moviesData;
    },
  },
});

export const { addGPTSuggestedMovies } = GPTFunctionalityData.actions;
export default GPTFunctionalityData.reducer;
