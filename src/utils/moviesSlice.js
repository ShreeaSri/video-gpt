import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addPlayingNowMovies: (state, action) => {
      state.playingNowMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addPlayingNowMovies, addMovieTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
