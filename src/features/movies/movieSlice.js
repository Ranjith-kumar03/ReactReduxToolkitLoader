import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    //const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    //const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  movies_loading: false,
  movies_error:{},
  shows: {},
  shows_loading: false,
  shows_error:{},
  selectMovieOrShow: {},
  selectMovieOrShow_loading: false,
  selectMovieOrShow_error:{},
};

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     removeSelectedMovieOrShow: (state) => {
//       state.selectMovieOrShow = {};
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchAsyncMovies.pending,(state) => {
//       console.log("Pending");
//        state.pending = true
//     }),
//     builder.addCase(fetchAsyncMovies.fulfilled, (state, payload ) => {
//       console.log("Fetched Successfully!");
//       state.pending = false
//       return { ...state, movies: payload };
//     }),
//     builder.addCase(fetchAsyncMovies.rejected, (state) => {
//       state.pending = false
//       console.log("Rejected!");
//     }),},
   
//   },
// })

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsyncMovies.pending, state => {
      state.movies_loading = true
    })
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      
        state.movies_loading = false
        state.movies = action.payload
        state.movies_error = ''
          
    })
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      state.movies_loading = false
      state.movies = {}
      state.movies_error = action.error.message
    })
    ////////////////////////
    builder.addCase(fetchAsyncShows.pending, state => {
      state.shows_loading = true
    })
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      
        state.shows_loading = false
        state.shows = action.payload
        state.shows_error = ''
          
    })
    builder.addCase(fetchAsyncShows.rejected, (state, action) => {
      state.shows_loading = false
      state.shows = {}
      state.shows_error  = action.error.message
    })

    ////////////////////////////////////
    builder.addCase(fetchAsyncMovieOrShowDetail.pending, state => {
      state.selectMovieOrShow_loading = true
    })
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
      
        state.selectMovieOrShow_loading = false
        state.selectMovieOrShow = action.payload
        state.selectMovieOrShow_error = ''
          
    })
    builder.addCase(fetchAsyncMovieOrShowDetail.rejected, (state, action) => {
      state.selectMovieOrShow_loading = false
      state.selectMovieOrShow = {}
      state.selectMovieOrShow_error  = action.error.message
    })
  }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieLoadingStatus = (state)=> state.movies.movies_loading
export const getAllShows = (state) => state.movies.shows;
export const getShowsLoadingStatus = (state)=> state.movies.shows_loading
//export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const getMovieOrShow_loadingStatus = (state)=> state.movies.selectMovieOrShow_loading
export default movieSlice.reducer;