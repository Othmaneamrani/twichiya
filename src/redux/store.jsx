import postReducer from "./PostSlice.jsx";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer : {
        post:postReducer
    }
});

export default store;