import { configureStore } from "@reduxjs/toolkit";
import currentPageReducer from "../reducers/currentPage";
import loadingReducer from "../reducers/loading";

export default configureStore({
    reducer: {
        currentPage: currentPageReducer,
        loading: loadingReducer
    }
})