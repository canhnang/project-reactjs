import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaRegCalendar, FaRegComment } from 'react-icons/fa';
import './BlogItemCard.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

BlogItemCard.propTypes = {
    blog: PropTypes.object,
    handleTitleClick: PropTypes.func,
};

BlogItemCard.defaultProps = {
    blog: null,
    handleTitleClick: null,
}

function BlogItemCard(props) {
    const { blog, isTrue } = props;
    const history = useHistory();

    const handleBlogDetailClick = () => {
        window.scrollTo(0, document.body.scrollTop);
        history.push(`./blog/${blog.id}`);
    }
    const handleTitleClick = () => {
        props.handleTitleClick(blog.id);
    }
    return (
        <div className="blog__item">
            <div className="blog__item__pic">
                <img src={blog.image} alt="" />
            </div>
            <div className="blog__item__text">
                <ul>
                    <li><i><FaRegCalendar /></i>{blog.time}</li>
                    <li><i><FaRegComment /></i>{blog.comment}</li>
                </ul>
                <h5><a onClick={handleTitleClick}>{blog.title}</a></h5>
                <p>{blog.content} </p>
                <a style={isTrue ? {} : { display: "none" }} className="blog__btn" onClick={handleBlogDetailClick}>READ MORE <span><FaArrowRight /></span></a>
            </div>
        </div>
    );
}

export default BlogItemCard;