import {configureStore} from "@reduxjs/toolkit";
import {templateSlice} from "./slice.template";
import {menuSlice} from "./slice.menu";
import {dialogSlice} from "./slice.dialog";


export const store = configureStore({
    reducer: {
        template: templateSlice.reducer,
        menu: menuSlice.reducer,
        dialog: dialogSlice.reducer
    }
})
