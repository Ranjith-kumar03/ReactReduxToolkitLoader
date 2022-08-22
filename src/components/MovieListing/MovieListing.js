import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies,getAllShows,getMovieLoadingStatus,getShowsLoadingStatus } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader/Loader";
import './MovieListing.scss'
import Slider from "react-slick";
import {Setting} from '../../common/setting'
const MovieListing = () => {
  const movieloadingStatus = useSelector(getMovieLoadingStatus);
  const showloadingStatus = useSelector(getShowsLoadingStatus);
  console.log("see the movie loading status",movieloadingStatus)
  console.log("see the show loading status",showloadingStatus)
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log("see the movie loading status",movieloadingStatus)
  console.log("see the show loading status",showloadingStatus)
  console.log(movies)
  let renderMovies, renderShows = "";
 
    renderMovies =  movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
       <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-err">
       
        <h3> {movies.Error}</h3>
      </div>
    );
  

    renderShows =  shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
       <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-err">
       
        <h3> {movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-Wrapper">
      {movieloadingStatus && showloadingStatus  ? (<Loader/>) : (<>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
         <Slider {...Setting}>{renderMovies}</Slider> 
        </div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">
        <Slider {...Setting}>{renderShows}</Slider> 
        </div>
      </div>
      </>)}
    </div>
  )
};

export default MovieListing;
