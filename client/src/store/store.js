import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice.js';
import theaterOwnerSlice from './theaterOwnerSlice.js';
import eventSlice from "./eventSlice.js";
export default configureStore({
    reducer : {
        userSlice : userSlice,
        theaterOwnerSlice : theaterOwnerSlice,
        eventSlice : eventSlice
    }
});

