import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    dialog: undefined
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers:{
        show:(state, action) => {
            state.visible = true
            state.dialog = action.payload
        },
        hide(state){
            state.visible = false
            state.dialog = undefined
        }
    }
})
export const { show, hide } = dialogSlice.actions
export default dialogSlice.reducer
