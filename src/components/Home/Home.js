import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing.js";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import {useDispatch} from 'react-redux'
import { fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice.js";
const Home = () => {
  const movieText = "Harry"
  const showTest ="Friends"
  const dispatch = useDispatch()
  useEffect(() => {
  
       dispatch(fetchAsyncMovies(movieText))   
       dispatch(fetchAsyncShows(showTest))   
  },[dispatch]);
  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
