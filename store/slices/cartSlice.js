import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data:[]
    },
    reducers: {
        removeItem (state,action) {
            const filteredData = state.data.map((item) => item.id !== action.payload)
            state.data = filteredData
        }
    }
})

export const { removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;