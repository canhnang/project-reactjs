import React from 'react';
import PropTypes from 'prop-types';
import './RecentNewCard.scss';

RecentNewCard.propTypes = {
    blog: PropTypes.object,
};

RecentNewCard.defaultProps = {
    blog: null,
}

function RecentNewCard(props) {
    const { blog } = props;


    return (
        <a href="#" className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
                <img src={blog.image} alt="" />
            </div>
            <div className="blog__sidebar__recent__item__text">
                <h6>{blog.title}</h6>
                <span>{blog.time}</span>
            </div>
        </a>
    );
}

export default RecentNewCard;