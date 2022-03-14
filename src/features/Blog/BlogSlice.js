import { createSlice } from '@reduxjs/toolkit';

const initialBlog = {
    blogRecent: [
        {
            image: "https://technext.github.io/ogani/img/blog/sidebar/sr-1.jpg",
            title: "09 Kinds Of Vegetables Protect The Liver",
            time: "JAN 05, 2019",
        },
        {
            image: "https://technext.github.io/ogani/img/blog/sidebar/sr-2.jpg",
            title: "Tips You To Balance  Nutrition Meal Day",
            time: "MAR 06, 2019",
        },
        {
            image: "https://technext.github.io/ogani/img/blog/sidebar/sr-3.jpg",
            title: "4 Principles Help You Lose Weight With Vegetables",
            time: "MAR 05, 2020",
        },
    ],
    listBlog: [
        {
            id: 1,
            title: '6 ways to prepare breakfast for 30',
            image: 'https://technext.github.io/ogani/img/blog/blog-1.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

        {
            id: 2,
            title: 'Visit the clean farm in the US',
            image: 'https://technext.github.io/ogani/img/blog/blog-2.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

        {
            id: 3,
            title: 'Cooking tips make cooking simple',
            image: 'https://technext.github.io/ogani/img/blog/blog-3.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

        {
            id: 4,
            title: 'Cooking tips make cooking simple',
            image: 'https://technext.github.io/ogani/img/blog/blog-4.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

        {
            id: 5,
            title: 'The Moment You Need To Remove Garlic From The Menu',
            image: 'https://technext.github.io/ogani/img/blog/blog-5.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

        {
            id: 6,
            title: 'Cooking tips make cooking simple',
            image: 'https://technext.github.io/ogani/img/blog/blog-6.jpg',
            time: 'May 4,2019',
            comment: 5,
            content: `
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

            The corner window forms a place within a place that is a resting point within the large space.
            The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables
            `
        },

    ]
};




const blogs = createSlice({
    name: 'blogs',
    initialState: initialBlog,
    reducers: {

    }
})


const { reducer, actions } = blogs;
export const { } = actions;
export default reducer;