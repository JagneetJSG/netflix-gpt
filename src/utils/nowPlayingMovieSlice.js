import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    addMovieTrailers: null
  },
  reducers: {
    addMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
    },
    addMovieTrailers: (state,action) => {
      state.addMovieTrailers = action.payload;
    }
  },
});

export const { addMovies, addMovieTrailers } = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
