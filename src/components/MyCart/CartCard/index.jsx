import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeCart, updateCart } from 'components/Header/headerSlice';

CartCard.propTypes = {
    product: PropTypes.object,
};

CartCard.defaultProps = {
    product: null,
}

function CartCard(props) {
    const { product } = props;
    const [totalPrice, setTotalPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    const handleDecQtyClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    }

    const handleQtyChange = (e) => {
        const value = Number(e.target.value);
        if (value > 0) {
            setQuantity(e.target.value);
        }
    }

    const handleIncQtyClick = () => {
        setQuantity(quantity + 1);

    }

    const handleRemoveCartClick = () => {
        const action = removeCart(product);
        dispatch(action);
    }

    useEffect(() => {
        const result = Number(product.price) * Number(quantity);
        const prd = { ...product };
        prd.quantity = quantity;
        const action = updateCart(prd);
        dispatch(action);
        setTotalPrice(result);


    }, [quantity])
    return (
        <tr>
            <td className="shoping__cart__item">
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
            </td>
            <td className="shoping__cart__price">
                ${product.price}
            </td>
            <td className="shoping__cart__quantity">
                <div className="quantity">
                    <div className="pro-qty">
                        <span className='dec qtybtn'
                            onClick={handleDecQtyClick}>-</span>
                        <input type="text" value={quantity} onChange={(e) => handleQtyChange(e)} />
                        <span className='inc qtybtn'
                            onClick={handleIncQtyClick}
                        >+</span>
                    </div>
                </div>
            </td>
            <td className="shoping__cart__total">
                ${totalPrice}
            </td>
            <td className="shoping__cart__item__close">
                <span><FaTrash onClick={handleRemoveCartClick} /></span>
            </td>

        </tr>
    );
}

export default CartCard;