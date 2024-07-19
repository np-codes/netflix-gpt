import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice ( {
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export default moviesSlice.reducer;
export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo } = moviesSlice.actions;