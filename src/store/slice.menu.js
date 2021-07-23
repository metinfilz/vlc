import {menuList} from "../resource/list.menu";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    c1Index: -1,
    c2Index: -1,
    c1Visible: false,
    c2Visible: false,

    c1Style: {
        top: 0,
        left: []
    },

    c1List: [],
    c2List: [],
    list: menuList.map((item) => item.name)

}


export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setC1Style: (state, action) => {
            state.c1Style.top = action.payload.top
            state.c1Style.left = action.payload.left
        },
        showC1: (state, action) => {
            state.c1Visible = true
            state.c1Index = action.payload
            state.c1List = menuList[state.c1Index].child
        },
        showC2: (state, action) => {
            console.log(action.payload)
            state.c2Visible = true
            state.c2Index = action.payload
            state.c2List = menuList[state.c1Index].child[state.c2Index].child
        },
        hideC1: (state, action) => {
            state.c1Visible = false
            state.c2Visible = false
            state.c1Index = -1

        },

    }
})
export const {hideC1} = menuSlice.actions
