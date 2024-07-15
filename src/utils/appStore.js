import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice';
import moviesReducer from './moviesSlice';

const appStore = configureStore ({
    reducer : {
        user: userSlice, // You can also write here userReducer as done below 
        movies: moviesReducer // Just like exported moviesSlice.reducer and import moviesReducer
    }
});

export default appStore;