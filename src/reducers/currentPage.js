import { createSlice } from "@reduxjs/toolkit";

export const currentPage = createSlice({
    name: "currentPage",
    initialState: {
        value: "Dashboard"
    },
    reducers: {
        changePage: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changePage } = currentPage.actions;

export default currentPage.reducer;