import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const data = useSelector((store) => store.movie?.addMovieTrailers);
  const trailer = data?.key;

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={
          "https://www.youtube.com/embed/" +
          trailer +
          "?&autoplay=1&mute=1"
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      />
    </div>
  );
};

export default VideoBackground;
