import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_FETCH_DATA } from "../utils/constants";
import { addPopuMovies } from "../utils/nowPlayingMovieSlice";

const usePopularMoviesData = () => {
  const dispatch = useDispatch();
  const popularMoviesData = useSelector(store=> store?.movie?.addPopularMovies) 

  const fetchApiData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_FETCH_DATA
    );
    const json = await data.json();
    dispatch(addPopuMovies(json.results));
  };
  useEffect(() => {
    if(!popularMoviesData)
    fetchApiData();
  }, []);
};

export default usePopularMoviesData;
