import { createSlice } from '@reduxjs/toolkit';

const listProduct = [
    {
        id: 1,
        image: "https://technext.github.io/ogani/img/featured/feature-1.jpg",
        title: "Crab Pool Security",
        price: 30,
        category: 'Oranges',
    },
    {
        id: 2,
        image: "https://technext.github.io/ogani/img/featured/feature-2.jpg",
        title: "Crab Pool Security",
        price: 31,
        category: 'Oranges',
    },
    {
        id: 3,
        image: "https://technext.github.io/ogani/img/featured/feature-4.jpg",
        title: "Crab Pool Security",
        price: 32,
        category: 'Oranges',
    },
    {
        id: 4,
        image: "https://technext.github.io/ogani/img/featured/feature-5.jpg",
        title: "Crab Pool Security",
        price: 33,
        category: 'Fresh Meat',
    },
    {
        id: 5,
        image: "https://technext.github.io/ogani/img/featured/feature-6.jpg",
        title: "Crab Pool Security",
        price: 4,
        category: 'Fresh Meat',

    },
    {
        id: 6,
        image: "https://technext.github.io/ogani/img/featured/feature-3.jpg",
        title: "Crab Pool Security",
        price: 30,
        category: 'Vegetables',
    },
    {
        id: 7,
        image: "https://technext.github.io/ogani/img/featured/feature-7.jpg",
        title: "Crab Pool Security",
        price: 30,
        category: 'Vegetables',
    },
    {
        id: 8,
        image: "https://technext.github.io/ogani/img/featured/feature-8.jpg",
        title: "Crab Pool Security",
        price: 30,
        category: 'Fastfood',
    },
];

const products = createSlice({
    name: 'products',
    initialState: listProduct,
    reducers: {

    }
})


const { reducer, actions } = products;
export const { } = actions;
export default reducer;