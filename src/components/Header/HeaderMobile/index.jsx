import React from 'react';
import PropTypes from 'prop-types';
import './HeaderMobile.scss';
import { Link } from 'react-router-dom';
import { FaBloggerB, FaEnvelopeOpenText, FaHome, FaShopware, FaStore } from 'react-icons/fa';

HeaderMobile.propTypes = {

};

function HeaderMobile(props) {
    return (
        <div className='header__mobile'>
            <ul>
                <li>
                    <Link to='/home'>
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        <FaStore />
                        <span>Shop</span>
                    </Link>
                </li>
                <li>
                    <Link to='/home'>
                        <FaShopware />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/blog'>
                        <FaBloggerB />
                        <span>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <FaEnvelopeOpenText />
                        <span>Contact</span>
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default HeaderMobile;