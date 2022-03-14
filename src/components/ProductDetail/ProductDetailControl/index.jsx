import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductDetailControl.scss';
import { FaFacebook, FaFacebookF, FaHeart, FaInstagram, FaPinterestP, FaRegHeart, FaStar, FaStarHalfAlt, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, toggleFavorite } from 'components/Header/headerSlice';

ProductDetailControl.propTypes = {
    product: PropTypes.object,
};

ProductDetailControl.defaultProps = {
    product: null,
}

function ProductDetailControl(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.cart.listFavorite);
    const cart = useSelector(state => state.cart.listCart);
    const index = favorite.findIndex(prd => prd.id === product.id);


    const [quantity, setQuantity] = useState(1);
    const isFavorite = (index >= 0) ? true : false;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    const listImg = [
        'https://technext.github.io/ogani/img/product/details/thumb-1.jpg',
        'https://technext.github.io/ogani/img/product/details/thumb-2.jpg',
        'https://technext.github.io/ogani/img/product/details/thumb-3.jpg',
        'https://technext.github.io/ogani/img/product/details/thumb-4.jpg',
        'https://technext.github.io/ogani/img/product/details/thumb-3.jpg',
    ]

    const [imgMain, setImgMain] = useState(product.image);
    //toggle favorite
    const handleToggleFavorite = () => {
        const action = toggleFavorite(product);
        dispatch(action);
    }

    //Giảm số lượng
    const handleDecQtyClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    //Inc quantity
    const handleIncQtyClick = () => {
        setQuantity(quantity + 1);
    }
    //input quantity onchange
    const handleQtyChange = (e) => {
        const value = Number(e.target.value);
        if (value > 0) {
            setQuantity(e.target.value);
        }
    }

    // add cart
    const handleAddCartClick = () => {
        const newPrd = { ...product };
        newPrd.quantity = quantity;
        const action = addCart(newPrd);
        dispatch(action);
        alert(`Đã thêm ${product.title} vào giỏ hàng`)
        setQuantity(1);
    }
    // select img
    const handleImgClick = (img) => {
        setImgMain(img);
    }
    return (
        <div className='row'>
            <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                    <div className="product__details__pic__item">
                        <img className="product__details__pic__item--large"
                            src={imgMain} alt="" />
                    </div>
                    <div className="product__details__pic__slider">
                        <Row>
                            <Slider {...settings}>
                                {listImg.map((img, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <Col style={{ margin: '0 0.5rem' }} onClick={() => handleImgClick(img)}>
                                                <img src={img} alt='lỗi' />
                                            </Col>
                                        </React.Fragment>

                                    )
                                })}
                            </Slider>
                        </Row>

                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                    <h3>{product.title}</h3>
                    <div className="product__details__rating">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStarHalfAlt /></i>
                        <span>(18 reviews)</span>
                    </div>
                    <div className="product__details__price">${product.price}</div>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                        quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                    <div className="product__details__quantity">
                        <div className="quantity">
                            <div className="pro-qty">
                                <span className='dec qtybtn'
                                    onClick={handleDecQtyClick}
                                >-</span>
                                <input type="text" value={quantity} onChange={(e) => handleQtyChange(e)} />
                                <span className='inc qtybtn'
                                    onClick={handleIncQtyClick}
                                >+</span>
                            </div>
                        </div>
                    </div>
                    <a className="primary-btn" onClick={handleAddCartClick}>ADD TO CARD</a>
                    <a className="heart-icon"><span onClick={handleToggleFavorite}>
                        {!isFavorite ? <FaRegHeart /> : <FaHeart style={{ color: 'red' }} />}
                    </span></a>
                    <ul>
                        <li><b>Availability</b> <span>In Stock</span></li>
                        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                        <li><b>Weight</b> <span>0.5 kg</span></li>
                        <li><b>Share on</b>
                            <div className="share">
                                <a href="#"><i><FaFacebookF /></i></a>
                                <a href="#"><i className="fa fa-twitter"><FaTwitter /></i></a>
                                <a href="#"><i className="fa fa-instagram"><FaInstagram /></i></a>
                                <a href="#"><i className="fa fa-pinterest"><FaPinterestP /></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailControl;