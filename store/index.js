import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { navReducer } from "./slices/navSlice";
import { openSubmenu,closeSubmenu } from "./slices/navSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        nav: navReducer
    }
})

export {openSubmenu,closeSubmenu,store}
