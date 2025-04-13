import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    addMovieTrailers: null,
    addPopularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailers: (state, action) => {
      state.addMovieTrailers = action.payload;
    },
    addPopuMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeMovieCategoriesData: () => {
      return {nowPlayingMovies: null, addMovieTrailers: null, addPopularMovies: null, topRatedMovies: null};
    }
  },
});

export const { addMovies, addMovieTrailers, addPopuMovies, addTopRatedMovies, removeMovieCategoriesData } =
  nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
