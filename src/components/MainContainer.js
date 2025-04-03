import React from "react";
import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!moviesData) return;
  const mainMovie = moviesData[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoInfo title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
