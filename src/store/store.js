import {configureStore} from "@reduxjs/toolkit";
import {dialogSlice} from "./dialog/dialog.slice";

export const store = configureStore({
  reducer: {
    dialog: dialogSlice.reducer
  }
})
