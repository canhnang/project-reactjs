import React from 'react';
import PropTypes from 'prop-types';
import './BlogSuggest.scss';
import { useSelector } from 'react-redux';
import BlogItemCard from '../BlogItemCard';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

BlogSuggest.propTypes = {

};

function BlogSuggest(props) {
    const listblog = useSelector(state => state.blog.listBlog);
    const blogs = listblog.filter(blog => blog.id < 4);
    const history = useHistory();

    const handleTitleClick = (id) => {
        window.scrollTo(0, document.body.scrollTop);
        history.push(`./${id}`);
    }

    return (
        <section className="related-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title related-blog-title">
                            <h2>Post You May Like</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                                <BlogItemCard isTrue={false} handleTitleClick={handleTitleClick} blog={blog} key={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default BlogSuggest;