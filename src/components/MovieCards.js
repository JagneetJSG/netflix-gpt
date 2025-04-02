import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCards = (props) => {
  const { imgPath } = props;
  return (
      <div className='px-4 min-w-48'>
        <img alt='movie-cards' src={MOVIE_IMG_CDN + imgPath} />
      </div>
  );
};

export default MovieCards;
