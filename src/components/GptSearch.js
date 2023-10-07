import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_URL} alt="netflix-logo" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
