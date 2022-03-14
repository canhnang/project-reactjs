import React from 'react';
import PropTypes from 'prop-types';
import "./HeaderMain.scss";
import {
    FaHeart,
    FaShoppingBag,
    FaBars
}
    from 'react-icons/fa';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import LinkNav from 'CustomLink/LinkNav';
import { useSelector, useDispatch } from 'react-redux';
import MainShop from 'features/Shop/pages/MainShop';
import NotFound from 'components/NotFound';
import Contact from 'features/Contact';
import MyCart from 'components/MyCart';

HeaderMain.propTypes = {

};

function HeaderMain(props) {

    const cart = useSelector(state => state.cart);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="https://technext.github.io/ogani/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li>
                                <LinkNav
                                    activeOnlyWhenExact={true}
                                    to="/home"
                                    label="Home"
                                />
                            </li>
                            <li>
                                <LinkNav to='/shop' label="Shop" />
                            </li>
                            <li>
                                <LinkNav to="page" label="Pages" />
                                <ul className="header__menu__dropdown">
                                    <li>
                                        <LinkNav to="/shop-detail" label='Shop Details' />
                                    </li>
                                    <li>
                                        <LinkNav to='/shoping-cart' label='Shoping Cart' />
                                    </li>
                                    <li>
                                        <LinkNav to='/checkout' label='Check Out' />
                                    </li>
                                    <li>
                                        <LinkNav to='/blog-details' label='Blog Details' />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <LinkNav to='/blog' label="Blog" />
                            </li>
                            <li>
                                <LinkNav to='/contact' label="Contact" />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i><FaHeart /></i> <span>{cart.listFavorite.length}</span></a></li>
                            <li><Link to="/my-cart"><i ><FaShoppingBag /></i> <span>{cart.listCart.length}</span></Link></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/blog"></Route>
                <Route path="/contact" children={<Contact />}></Route>
                <Route path="/my-cart" children={<MyCart />} />

            </Switch>
        </div>
    );
}

export default HeaderMain;