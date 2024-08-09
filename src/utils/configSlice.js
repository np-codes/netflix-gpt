import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice(
    {
        name: 'config',
        initialState: {
            language: "en",
            userapikey: null
        },
        reducers: {
            changeLanguage: (state,action) => {
                state.language = action.payload;
            },

            addAPIKey: (state,action) => {
                state.userapikey = action.payload;
            },

            removeAPIKey: (state,action) => {
                state.userapikey = null;
            }
        }
    }
);

export default configSlice.reducer;

export const {changeLanguage, addAPIKey, removeAPIKey} = configSlice.actions;