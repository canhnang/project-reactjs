import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCart2 from 'components/ProductCart2';
import { } from 'react-redux';
import ProductCart from 'components/ProductCart';
import { useSelector, useDispatch } from 'react-redux';
import { FaListUl, FaLongArrowAltRight, FaThLarge } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import './MainShop.scss';





MainShop.propTypes = {

};

function MainShop(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
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

    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    const [pageCurr, setPageCurr] = useState(1);

    const products = [
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-1.jpg',
            title: 'Crab Pool Security',
            price: 30,
            sale: 20,
            oldPrice: 36,
        },
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-2.jpg',
            title: 'Crab Pool Security',
            price: 30,
            sale: 20,
            oldPrice: 36,
        },
        {
            image: 'https://technext.github.io/ogani/img/latest-product/lp-3.jpg',
            title: 'Crab Pool Security',
            price: 30,
            sale: 20,
            oldPrice: 36,
        },
    ];

    const deparment = ['Fresh Meat', 'Vegetables', 'Fruit & Nut Gifts', 'Ocean Foods',
        'Butter & Eggs', 'Fastfood', 'Fresh Onion', 'Papayaya & Crisps', 'Oatmeal'];

    const colors = ['White', 'Gray', 'Red', 'Black', 'Blue', 'Green'];

    const sizes = ['Large', 'Medium', 'Small', 'Tiny'];

    const listPanigation = [1, 2, 3];


    const listProduct = useSelector(state => state.products);


    const handleFilterOptionClick = (e) => {
        const filterActive = document.querySelector(".filter__option span.active");
        const filter = document.querySelector(".filter__option span[class= '']");

        filterActive.classList.remove("active");
        filter.classList.add("active");
    }
    return (
        < div>
            <section className="breadcrumb-section set-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Organi Shop</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
                                    <ul>
                                        {deparment.map((item, index) => {
                                            return (
                                                <li key={index}><a href="#">{item}</a></li>
                                            )
                                        })}

                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabIndex="10" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabIndex="100" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    {colors.map((color, index) => {
                                        return (
                                            <div key={index} className={`sidebar__item__color sidebar__item__color--${color.toLowerCase()}`}>
                                                <label>
                                                    {color}
                                                    <input type="radio" id={color.toLowerCase()} />
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    {sizes && sizes.map((size, index) => {
                                        return (
                                            <div key={index} className="sidebar__item__size">
                                                <label>
                                                    {size}
                                                    <input type="radio" id={size.toLowerCase()} />
                                                </label>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider owl-carousel">
                                            <Slider {...settings2}>
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
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="product__discount__slider owl-carousel">
                                    <Row>
                                        <Slider {...settings}>
                                            {listProduct.map((product, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Col style={{ margin: '0 0.5rem' }}>
                                                            < ProductCart product={product} />
                                                        </Col>
                                                    </React.Fragment>
                                                )
                                            })}

                                        </Slider>
                                    </Row>

                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className='active' onClick={(e) => handleFilterOptionClick(e)}><FaThLarge /></span>
                                            <span className='' onClick={(e) => handleFilterOptionClick(e)}><FaListUl /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {listProduct.map((product, index) => {
                                    return (
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                            <ProductCart product={product} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="product__pagination">
                                {listPanigation.map((num, index) => {
                                    return (
                                        <a key={index}
                                            className={(pageCurr === num) ? "active" : ""}
                                            onClick={() => setPageCurr(num)}
                                        >{num}</a>
                                    )
                                })}

                                <a><i><FaLongArrowAltRight /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default MainShop;