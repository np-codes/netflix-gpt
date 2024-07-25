import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice ({
    name:'gpt',
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGPTSearchPage : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGPTSearchPage} = gptSlice.actions;