import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.playingNowMovies);
  if (movies === null) return;

  const random = Math.trunc(Math.random() * 20) + 1;
  //   console.log(random);
  const mainMovie = movies[2];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
