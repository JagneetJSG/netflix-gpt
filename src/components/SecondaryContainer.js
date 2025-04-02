import React from "react";
import MoviesTypeLists from "./MoviesTypeLists";
import { useSelector } from "react-redux";
import usePopularMoviesData from "../hooks/usePopularMoviesData";
import useTopRatedData from "../hooks/useTopRatedData";

const SecondaryContainer = () => {
  usePopularMoviesData();
  useTopRatedData();
  const nowPlayingMoviesList = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  // console.log(nowPlayingMoviesList);
  const popularMoviesList = useSelector(
    (store) => store.movie?.addPopularMovies
  );
  const topRatedMoviesList = useSelector((store=> store.movie?.topRatedMovies))
  console.log(topRatedMoviesList);
  return (
    <div className='bg-black'>
      <div className='-mt-48 z-20 relative'>
        <MoviesTypeLists type='Now Playing' list={nowPlayingMoviesList} />
        <MoviesTypeLists type='Popular' list={popularMoviesList} />
        <MoviesTypeLists type='Top Rated' list={topRatedMoviesList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
