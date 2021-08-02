import { configureStore } from '@reduxjs/toolkit';
import showSliceReducer from './slices/ShowSlice';

export default configureStore({
  reducer: {
    show: showSliceReducer,
  },
});
