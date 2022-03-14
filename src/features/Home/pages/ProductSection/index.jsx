import React from 'react';
import PropTypes from 'prop-types';
import './ProductSection.scss';
import ProductCart2 from 'components/ProductCart2';
import Slider from 'react-slick';

ProductSection.propTypes = {

};

function ProductSection(props) {
    const products = [
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-1.jpg',
            title: 'Crab Pool Security',
            price: 30,
        },
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-2.jpg',
            title: 'Crab Pool Security',
            price: 30,
        },
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-3.jpg',
            title: 'Crab Pool Security',
            price: 30,
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };
    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Latest Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <Slider {...settings}>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <Slider {...settings}>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Review Products</h4>
                            <div className="latest-product__slider owl-carousel">
                                <Slider {...settings}>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        {products.map((product, index) => {
                                            return (
                                                <ProductCart2 key={index} product={product} />
                                            )
                                        })}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;