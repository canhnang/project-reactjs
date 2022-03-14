import React from 'react';
import PropTypes from 'prop-types';
import './BlogItem.scss';
import { FaRegCalendar, FaRegComment } from 'react-icons/fa';

BlogItem.propTypes = {
    blog: PropTypes.object,
};

BlogItem.defaultProps = {
    blog: null,
}

function BlogItem(props) {
    const { blog } = props;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
                <div className="blog__item__pic">
                    <img src={blog.image} alt="" />
                </div>
                <div className="blog__item__text">
                    <ul>
                        <li><i><FaRegCalendar /></i>{blog.date}</li>
                        <li><i><FaRegComment /></i> {blog.comment}</li>
                    </ul>
                    <h5><a href="#">{blog.title}</a></h5>
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;