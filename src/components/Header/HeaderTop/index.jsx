import React from 'react';
import PropTypes from 'prop-types';
import {
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaLinkedinIn,
    FaUser,
    FaAngleDown
}
    from 'react-icons/fa';
import './HeaderTop.scss';


HeaderTop.propTypes = {

};

function HeaderTop(props) {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li>
                                    <i><FaEnvelope /></i>
                                    hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="#"><i><FaFacebookF /></i></a>
                                <a href="#"><i><FaTwitter /></i></a>
                                <a href="#"><i><FaLinkedinIn /></i></a>
                                <a href="#"><i><FaPinterestP /></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src="https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/08/20/co-quoc-ky-cac-nuoc-the-gioi-193.jpg" alt="" />
                                <div>Việt Nam</div>
                                <span><FaAngleDown /></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">Việt Nam</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#"><i className="fa fa-user"><FaUser /></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;