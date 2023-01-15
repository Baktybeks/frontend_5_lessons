import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import preloaderReducer from './preloaderSlice'





export const store = configureStore({
    reducer: {
        usersReducer,
        preloaderReducer
    }
})