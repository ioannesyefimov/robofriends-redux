import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../components/searchField/searchField'
import robotsReducer from '../components/robots/requestRobots'

export const store = configureStore({
    reducer : {
        searchField: searchReducer,
        robots: robotsReducer,
    }
})