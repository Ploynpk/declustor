import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice.js';

// redux store
const store = configureStore({
    // call reducer
    reducer: {
      global: globalReducer,
    },

});

export default store;