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
    removeGPTData: ()=>{
      return {gptNames: null, tmdbGptMovies: null};
    }
  },
});

export const { addGPTSuggestedMovies, removeGPTData } =
  GPTFunctionalityData.actions;
export default GPTFunctionalityData.reducer;
