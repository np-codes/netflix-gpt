import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice';

const appStore = configureStore ({
    reducer : {
        user: userSlice // You can also write here userReducer but your export should be userSlice.reducer
    }
});

export default appStore;