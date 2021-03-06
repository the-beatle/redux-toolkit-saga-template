import { createSlice } from '@reduxjs/toolkit'


export interface catState {
    cats: any
    isLoading: boolean
}

const initialState: catState = {
    cats: null,
    isLoading: false
}

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isLoading = false;
        },
    },
})

export const {getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions

export default catSlice.reducer