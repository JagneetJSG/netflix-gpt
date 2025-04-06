import React from "react";
import { useSelector } from "react-redux";
import MoviesTypeLists from "./MoviesTypeLists";

const TmdbSuggestions = () => {
  const { gptNames, tmdbGptMovies } = useSelector((store) => store?.gptSearch);
  return (
    <div className='mb-8'>
      {gptNames && gptNames.map((movieName, index) => (
        <MoviesTypeLists key={movieName} type={movieName} list={tmdbGptMovies[index]} />
      ))}
    </div>
  );
};

export default TmdbSuggestions;
