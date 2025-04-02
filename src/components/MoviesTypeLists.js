import React from "react";
import MovieCards from "./MovieCards";

const MoviesTypeLists = (props) => {
  const { type, list } = props;
  return (
    <div className='px-16 z-30'>
      <h1 className="pb-8 pt-16 font-bold text-xl text-white">{type}</h1>
      <div className='flex overflow-x-scroll'>
        {list &&
          list.map((movie) => (
            <MovieCards key={movie.id} imgPath={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MoviesTypeLists;
