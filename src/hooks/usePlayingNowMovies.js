import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPlayingNowMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePlayingNowMovies = () => {
  //fetch data from TMDB Api and update store
  const dispatch = useDispatch();

  const getPlayingNowMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data.results);
    dispatch(addPlayingNowMovies(data.results));
  };

  useEffect(() => {
    getPlayingNowMovies();
  }, []);
};

export default usePlayingNowMovies;
