import React from 'react';
import PropTypes from 'prop-types';
import './ProductCart2.scss';

ProductCart2.propTypes = {
    product: PropTypes.object,
};

ProductCart2.defaultProps = {
    product: null,
};

function ProductCart2(props) {
    const { product } = props;
    return (
        <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
                <img src={product.image} alt="" />
            </div>
            <div className="latest-product__item__text">
                <h6>{product.title}</h6>
                <span>${product.price}</span>
            </div>
        </a>
    );
}

export default ProductCart2;