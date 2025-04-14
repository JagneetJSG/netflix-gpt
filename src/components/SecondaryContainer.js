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
  const popularMoviesList = useSelector(
    (store) => store.movie?.addPopularMovies
  );
  const topRatedMoviesList = useSelector((store=> store.movie?.topRatedMovies))
  return (
    <div className='bg-black'>
      <div className='md:-mt-48 z-20  pb-10 relative'>
        <MoviesTypeLists type='Now Playing' list={nowPlayingMoviesList} />
        <MoviesTypeLists type='Top Rated' list={topRatedMoviesList} />
        <MoviesTypeLists type='Popular' list={popularMoviesList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
