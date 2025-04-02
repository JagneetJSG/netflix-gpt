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
  },
});

export const { addMovies, addMovieTrailers, addPopuMovies, addTopRatedMovies } =
  nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
