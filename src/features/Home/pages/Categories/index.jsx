import React from 'react';
import PropTypes from 'prop-types';
import './Categories.scss';
import Slider from 'react-slick';
import { Col } from 'reactstrap';

Categories.propTypes = {

};

function Categories(props) {
    const categorys = [
        {
            image: 'https://technext.github.io/ogani/img/categories/cat-1.jpg',
            title: 'Fresh Fruit',
        },
        {
            image: 'https://technext.github.io/ogani/img/categories/cat-2.jpg',
            title: 'Dried Fruit',
        },
        {
            image: 'https://technext.github.io/ogani/img/categories/cat-3.jpg',
            title: 'Vegetables',
        },
        {
            image: 'https://technext.github.io/ogani/img/categories/cat-4.jpg',
            title: 'drink fruits',
        },
        {
            image: 'https://technext.github.io/ogani/img/categories/cat-5.jpg',
            title: 'Fresh Fruit',
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    };
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__slider owl-carousel">
                    <div className='row'>
                        <Slider {...settings}>

                            {categorys.map((category, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Col style={{ margin: '0 1rem' }}>
                                            <div className="categories__item set-bg" style={{ backgroundImage: `url(${category.image})` }}>
                                                <h5><a href="#">{category.title}</a></h5>
                                            </div>
                                        </Col>
                                    </React.Fragment>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Categories;