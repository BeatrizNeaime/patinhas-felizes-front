import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
    name: "loading",
    initialState: {
        value: false
    },
    reducers: {
        openLoading: (state) => {
            state.value = true;
        },
        closeLoading: (state) => {
            state.value = false;
        }
    }
})

export const { openLoading, closeLoading } = loading.actions;

export default loading.reducer;