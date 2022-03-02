import { createSlice } from "@reduxjs/toolkit";


export const SearchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
        loading: false,
        error: null
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export default SearchSlice.reducer;

export const { setSearch } = SearchSlice.actions;

export const SelectSearch = state => state.search.search;