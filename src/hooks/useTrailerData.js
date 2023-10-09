import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrailerData = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getatrailerVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);

    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer ? filterTrailer[1] : data.results[0];
    console.log(trailer);

    // const trailerKey = trailer.key;

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getatrailerVideo();
  }, []);
};

export default useTrailerData;
