/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_FETCH_DATA } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailers } from "../utils/nowPlayingMovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_FETCH_DATA
    );
    const json = await data.json();
    const filteredMovieTrailer = json?.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const movieTrailer = filteredMovieTrailer ? filteredMovieTrailer[0] : json.results[0]
    dispatch(addMovieTrailers(movieTrailer));
};

useEffect(() => {
   movieTrailer();
}, []);
};
export default useMovieTrailer;
