// srx/redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import groceryReducer from './grocerySlice';

const store = configureStore({
    reducer: {
        grocery: groceryReducer,
    },
});

export default store;
