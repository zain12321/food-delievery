import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./redux/cartItem";

const store = configureStore({
    reducer:{
        user:cartItem,
    }
})

export default store