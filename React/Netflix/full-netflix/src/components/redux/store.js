import { configureStore } from "@reduxjs/toolkit";
import Lists from "./slices/lists";
import Search from './slices/search';

export default configureStore({
    reducer: {
        list: Lists,
        search: Search
    }
})