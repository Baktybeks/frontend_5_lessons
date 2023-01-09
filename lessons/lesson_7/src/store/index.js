import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./postsSlice"
import preloaderReducer from "./preloaderSlice"
import errorReducer from "./errorSlice"

export const store = configureStore({
    reducer:{
        postsReducer,
        preloaderReducer,
        errorReducer
    }
})