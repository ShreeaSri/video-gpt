import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMovies: null,
  },
  reducers: {
    addPlayingNowMovies: (state, action) => {
      state.playingNowMovies = action.payload;
    },
  },
});

export const { addPlayingNowMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
