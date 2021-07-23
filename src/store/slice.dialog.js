import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    dialog: undefined
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers:{
        show: (state, action) => {
            state.visible = true
            state.dialog = action.payload
        },
        hide: (state, action) => {
            state.visible = false
            state.dialog = undefined
        },
        outside: (state, action) => {
            state.dialog = action.payload
        }
    }
})

export const {show, hide, outside} = dialogSlice.actions
export default dialogSlice.reducer
