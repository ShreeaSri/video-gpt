import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in tmdb database
  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();

    return data.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an api call to GPT API to get movie results
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      //TODO: WRITE ERROR HANDLING
    }
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(", ");
    console.log(gptMovies);

    //for each movie we will search tmdb API

    const gptPromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const prmiseArrayTmdbResult = await Promise.all(gptPromiseArray);
    console.log(prmiseArrayTmdbResult);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: prmiseArrayTmdbResult,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
