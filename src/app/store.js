import { configureStore } from "@reduxjs/toolkit";
import productsReducder from 'features/Home/homeSlice';
import cartReducer from 'components/Header/headerSlice';
import blogReducer from 'features/Blog/BlogSlice';

const rootReducer = {
    products: productsReducder,
    cart: cartReducer,
    blog: blogReducer,
}

const store = configureStore({
    reducer: rootReducer,
})
export default store;