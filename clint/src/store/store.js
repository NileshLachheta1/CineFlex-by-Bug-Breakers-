import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice.js';
import theaterOwnerSlice from './theaterOwnerSlice.js';
export default configureStore({
    reducer : {
        userSlice : userSlice,
        theaterOwnerSlice : theaterOwnerSlice
    }
});

