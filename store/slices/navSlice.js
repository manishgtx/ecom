import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../meta/links'
const navSlice = createSlice({
    name: 'nav',
    initialState: {
        isSubmenuOpen: false,
        list:{},
    },
    reducers: {
        openSubmenu(state,action){
            const newData = data.find((item) => item.name === action.payload)
            state.list = newData;
            state.isSubmenuOpen = true
        },
        closeSubmenu(state,action){
            
            state.isSubmenuOpen = false
        }
    }
})
export const {openSubmenu, closeSubmenu} = navSlice.actions;
export const navReducer = navSlice.reducer;