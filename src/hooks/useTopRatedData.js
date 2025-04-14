/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_FETCH_DATA } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/nowPlayingMovieSlice";

const useTopRatedData = () => {
const topRatedMovies = useSelector(store=>store.movie.topRatedMovies)

  const dispatch = useDispatch();
  const fetchApiData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_FETCH_DATA
    );
    const json =await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    if(!topRatedMovies)
    fetchApiData();
  }, []);
};

export default useTopRatedData;
