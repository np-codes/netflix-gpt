import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice';
import moviesReducer from './moviesSlice';
import gptSlice from './gptSlice';
import configSlice from './configSlice';

const appStore = configureStore ({
    reducer : {
        user: userSlice, // You can also write here userReducer as done below 
        movies: moviesReducer, // Just like exported moviesSlice.reducer and import moviesReducer
        gpt: gptSlice,
        config: configSlice
    }
});

export default appStore;