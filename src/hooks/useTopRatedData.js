import { useEffect } from "react";
import { API_FETCH_DATA } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/nowPlayingMovieSlice";

const useTopRatedData = () => {
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
    fetchApiData();
  }, []);
};

export default useTopRatedData;
