import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MyCart.scss';
import { Link, Route, Switch } from 'react-router-dom';
import MainPage from 'features/Home/pages/MainPage';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { useEffect } from 'react';

MyCart.propTypes = {

};

function MyCart(props) {
    const listCart = useSelector(state => state.cart);
    const carts = listCart.listCart;
    const [totalCart, setTotalCart] = useState(0);
    useEffect(() => {
        const totalPrice = carts.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0);
        setTotalCart(totalPrice);
    })
    const handleUpdateCartClick = () => {

    }
    return (
        <div>
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={(listCart.listCart.length === 0) ? {} : { display: 'none' }}>
                                            <td colSpan={4}>Chưa có gì trong giỏ hàng <br /> <br />
                                                <Link to="/shop" className='primary-btn cart-btn'>CONTINUE SHOPPING</Link></td>
                                        </tr>
                                        {listCart && listCart.listCart.map((product, index) => {
                                            {
                                                return (
                                                    <CartCard product={product} key={index} />
                                                )
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={(listCart.listCart.length !== 0) ? {} : { display: 'none' }}>
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link to="/shop" className='primary-btn cart-btn'>CONTINUE SHOPPING</Link>
                                <a className="primary-btn cart-btn cart-btn-right" onClick={handleUpdateCartClick}>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$0</span></li>
                                    <li>Total <span>${totalCart}</span></li>
                                </ul>
                                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switch>
                <Route path="/shop" children={<MainPage />} />
            </Switch>
        </div>



    );
}

export default MyCart;