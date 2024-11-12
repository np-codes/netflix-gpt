import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Import combineReducers
import userSlice from './userSlice';
import moviesReducer from './moviesSlice';
import gptSlice from './gptSlice';
import configSlice from './configSlice';

// Combine your slice reducers into a single appReducer
const appReducer = combineReducers({
    user: userSlice,
    movies: moviesReducer,
    gpt: gptSlice,
    config: configSlice
});

// Create a rootReducer to handle state reset
const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        return appReducer(undefined, action); // Reset the entire state
    }
    return appReducer(state, action); // Otherwise, return the current state
};

// Configure the store with the rootReducer
const appStore = configureStore({
    reducer: rootReducer,
});

// Action creator for resetting the app state
export const resetReduxStore = () => ({
    type: 'RESET_STORE',
});

export default appStore;
