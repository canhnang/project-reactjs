import React from 'react';
import PropTypes from 'prop-types';
import './MainBlog.scss';
import BlogItemCard from 'features/Blog/components/BlogItemCard';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import BlogSidebar from 'features/Blog/components/BlogSidebar';

MainBlog.propTypes = {

};

function MainBlog(props) {
    const blogs = useSelector(state => state.blog);
    const blg = blogs.listBlog;

    const listPanigation = [1, 2, 3];
    const [panigation, setPanigation] = useState(1);

    const handlePanigationClick = (index) => {
        setPanigation(index);
    }

    const handleTitleClick = () => {

    }
    return (
        <div>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Blog</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <BlogSidebar />
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="row">
                                {blg.map((bl, index) => {
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                                            <BlogItemCard isTrue={true} blog={bl} handleTitleClick={handleTitleClick} />
                                        </div>
                                    )
                                })}
                                <div className="col-lg-12">
                                    <div className="product__pagination blog__pagination">
                                        {listPanigation.map((pan, index) => {
                                            return (
                                                <a key={index}
                                                    className={(panigation === pan) ? "active" : ""}
                                                    onClick={() => handlePanigationClick(pan)}
                                                >{pan}</a>
                                            )
                                        })}
                                        <a><i><FaArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default MainBlog;