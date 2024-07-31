import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice ({
    name:'gpt',
    initialState: {
        showGPTSearch: false,
        gptMovieNames: null,
        gptMovieDetails : null
    },
    reducers: {
        toggleGPTSearchPage : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMoviesResult : (state,actions) => {
            const {gptMovieNames , gptMovies} = actions.payload;
            state.gptMovieNames = gptMovieNames;
            state.gptMovieDetails = gptMovies;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGPTSearchPage, addGPTMoviesResult} = gptSlice.actions;