import React from 'react';
import PropTypes from 'prop-types';
import './BlogSection.scss';
import BlogItem from 'components/BlogItem';

BlogSection.propTypes = {

};

function BlogSection(props) {
    const blogs = [
        {
            image: "https://technext.github.io/ogani/img/blog/blog-1.jpg",
            title: "Cooking tips make cooking simple",
            content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            date: "May 4,2019",
            comment: 3,
        },
        {
            image: "https://technext.github.io/ogani/img/blog/blog-2.jpg",
            title: "6 ways to prepare breakfast for 30",
            content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            date: "May 4,2019",
            comment: 5,
        },
        {
            image: "https://technext.github.io/ogani/img/blog/blog-3.jpg",
            title: "Visit the clean farm in the US",
            content: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
            date: "May 4,2019",
            comment: 7,
        },

    ]
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogItem blog={blog} key={index} />
                        )
                    })}

                </div>
            </div>
        </section>
    );
}

export default BlogSection;