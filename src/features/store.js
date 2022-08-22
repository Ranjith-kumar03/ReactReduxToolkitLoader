import { configureStore } from "@reduxjs/toolkit";
import Moviesreducer from "../features/movies/movieSlice";
export const store = configureStore({
  reducer: {
    movies: Moviesreducer,
  },
});
