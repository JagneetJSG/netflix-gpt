/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_FETCH_DATA } from "../utils/constants";
import { addMovies } from "../utils/nowPlayingMovieSlice";
import { useEffect } from "react";

const useGetMoviesData = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_FETCH_DATA
    );
    const json = await data.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    if(!nowPlayingMovies)
    getNowPlayingMovies();
  }, []);
};

export default useGetMoviesData;
