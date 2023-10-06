import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.playingNowMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.playingNowMovies} />
          <MovieList title={"Trending"} movies={movies.playingNowMovies} />
          <MovieList title={"Popular"} movies={movies.playingNowMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.playingNowMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
