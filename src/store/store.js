import {configureStore} from "@reduxjs/toolkit";
import {templateSlice} from "./slice.template";
import {menuSlice} from "./slice.menu";


export const store = configureStore({
    reducer: {
        template: templateSlice.reducer,
        menu: menuSlice.reducer
    }
})
