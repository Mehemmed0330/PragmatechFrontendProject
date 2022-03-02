import { createSlice } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
    name: "lists",
    initialState: {
        lists: [],
        loading: false,
        error: null
    },
    reducers: {
        setLists: (state, action) => {
            state.lists = action.payload;
        }
    }
})

export const { setLists } = ListSlice.actions;

export const SelectList = state => state.list.lists;

export default ListSlice.reducer;