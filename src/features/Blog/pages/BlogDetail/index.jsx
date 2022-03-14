import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './BlogDetail.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import BlogSuggest from 'features/Blog/components/BlogSuggest';
import BlogSidebar from 'features/Blog/components/BlogSidebar';

BlogDetail.propTypes = {

};

function BlogDetail(props) {
    const { blogId } = useParams();
    const blogs = useSelector(state => state.blog.listBlog);
    const blog = blogs.find(blog => blog.id === Number(blogId));
    return (

        <div>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Blog</h2>
                                <div className="breadcrumb__option">
                                    <span>Blog- </span>
                                    <span> {blog.title}</span>
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
                            <div className="blog__details__text">
                                <img src={blog.image} alt="" />
                                <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                    dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                                    aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                                    sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                                    Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                                    quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                                    feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                <h3>The corner window forms a place within a place that is a resting point within the large
                                    space.</h3>
                                <p>The study area is located at the back with a view of the vast nature. Together with the other
                                    buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                                    the components. The use of materials seeks connection to the main house, the adjacent
                                    stables</p>
                            </div>
                            <div className="blog__details__content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blog__details__author">
                                            <div className="blog__details__author__pic">
                                                <img src="https://technext.github.io/ogani/img/blog/details/details-author.jpg" alt="" />
                                            </div>
                                            <div className="blog__details__author__text">
                                                <h6>Michael Scofield</h6>
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blog__details__widget">
                                            <ul>
                                                <li><span>Categories:</span> Food</li>
                                                <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                                            </ul>
                                            <div className="blog__details__social">
                                                <a href="#"><i><FaFacebookF /></i></a>
                                                <a href="#"><i><FaTwitter /></i></a>
                                                <a href="#"><i><FaGooglePlusG /></i></a>
                                                <a href="#"><i><FaLinkedinIn /></i></a>
                                                <a href="#"><i><FaEnvelope /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BlogSuggest />
        </div>
    );
}

export default BlogDetail;