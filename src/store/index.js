import { configureStore } from "@reduxjs/toolkit";
import logger from "redux- logger";

export const store = configureStore({
    reducer: {
        postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})