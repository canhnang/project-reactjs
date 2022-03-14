import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listCart: [],
    listFavorite: [],
}
const carts = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const newProduct = action.payload;
            const index = state.listCart.findIndex(product => product.id === newProduct.id);
            if (index < 0) {
                state.listCart.push(newProduct);
            }
        },

        updateCart: (state, action) => {
            const productUpdate = action.payload;
            const index = state.listCart.findIndex(product => product.id === productUpdate.id);
            state.listCart[index].quantity = productUpdate.quantity;
        },

        addFavorite: (state, action) => {
            const newProduct = action.payload
            const index = state.listFavorite.findIndex(product => product.id === newProduct.id);
            if (index < 0) {
                state.listFavorite.push(newProduct);
            }
        },
        toggleFavorite: (state, action) => {
            const prd = action.payload;
            const index = state.listFavorite.findIndex(product => product.id === prd.id);
            if (index < 0) {
                state.listFavorite.push(prd);
            } else {
                state.listFavorite.splice(index, 1);
            }

        },

        removeCart: (state, action) => {
            const productRemove = action.payload;
            const index = state.listCart.findIndex(product => product.id === productRemove.id);
            if (index < 0) {
                return;
            }
            state.listCart.splice(index, 1);

        }
    }
});

const { reducer, actions } = carts;
export const { addCart, addFavorite, removeCart, updateCart, toggleFavorite } = actions;
export default reducer;