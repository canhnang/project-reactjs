import React from 'react';
import PropTypes from 'prop-types';
import './BlogSidebar.scss';
import { FaSearch } from 'react-icons/fa';
import RecentNewCard from '../RecentNewCard';
import { useSelector } from 'react-redux';

BlogSidebar.propTypes = {

};

function BlogSidebar(props) {

    const categorys = [
        {
            title: "All",
        },
        {
            title: "Beauty",
            quantity: 20,
        },
        {
            title: "Food",
            quantity: 5,
        },
        {
            title: "LifeStyle",
            quantity: 9,
        },
        {
            title: "Travel",
            quantity: 10,
        }
    ];

    const SearchBy = ['Apple', 'Beauty', 'Vegetables', 'Fruit', 'Healthy Food', 'LifeStyle'];

    const blogs = useSelector(state => state.blog);
    const { blogRecent } = blogs;

    return (
        <div className="blog__sidebar">
            <div className="blog__sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span><FaSearch /></span></button>
                </form>
            </div>
            <div className="blog__sidebar__item">
                <h4>Categories</h4>
                <ul>
                    {categorys.map((category, index) => {
                        return (
                            <li key={index}><a >{category.title}{category.quantity ? ` (${category.quantity})` : ''}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div className="blog__sidebar__item">
                <h4>Recent News</h4>
                <div className="blog__sidebar__recent">
                    {blogRecent.map((blog, index) => {
                        return (
                            <RecentNewCard blog={blog} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="blog__sidebar__item">
                <h4>Search By</h4>
                <div className="blog__sidebar__item__tags">
                    {SearchBy.map((value, index) => {
                        return (
                            <a key={index} href='#'>{value}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogSidebar;