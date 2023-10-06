import React from "react";

import useTrailerData from "../hooks/useTrailerData";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);
  console.log(trailerVideo);

  useTrailerData(movieId);

  return (
    <div className="w-screen aspect-w-16 aspect-h-200">
      <iframe
        className="w-screen aspect-video h-full"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
