import {createSlice} from "@reduxjs/toolkit";

const initialState = {
}

export const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        dialog: (state, action) => {
            state.dialog = action.payload
        }
    }
})

