import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCards = (props) => {
  const { imgPath } = props;
  return (
    <>
      {imgPath && (
        <div className='px-4'>
          <img
            className='min-w-30 max-w-32 h-52 object-cover'
            alt='movie-cards'
            src={MOVIE_IMG_CDN + imgPath}
          />
        </div>
      )}
    </>
  );
};

export default MovieCards;
