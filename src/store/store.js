import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from './slice/slice.dialog'

export default configureStore({
  reducer: {
    dialog: dialogReducer
  }
});
