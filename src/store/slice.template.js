import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dialog: undefined
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

export const {dialog} = templateSlice.actions
