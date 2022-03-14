import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRetweet, FaShoppingCart } from 'react-icons/fa';
import './ProductCart.scss';
import { useDispatch } from 'react-redux';
import { addCart, addFavorite } from 'components/Header/headerSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

ProductCart.propTypes = {
    product: PropTypes.object,
};

ProductCart.defaultProps = {
    product: null,
}

function ProductCart(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const history = useHistory();


    // Thêm sản phẩm vào danh sách yêu thích
    const handleFavoriteClick = () => {
        const action = addFavorite(product);
        dispatch(action);
    };

    //Thêm sản phẩm vào giỏ hàng
    const handleAddCartClick = () => {
        const newProductCart = { ...product };
        newProductCart.quantity = 1;
        const action = addCart(newProductCart);
        dispatch(action);
        alert(`Đã thêm '${product.title}' vào giỏ hàng`);

    };

    //Xem chi tiết sản phẩm
    const handleProductDetailClick = () => {
        window.scrollTo(0, document.body.scrollTop);
        history.push(`./shop/${product.id}`);
    }
    return (
        <div className="featured__item">
            <div className="featured__item__pic set-bg" style={product && { backgroundImage: `url(${product.image})` }}>
                <div className={(product.sale) ? 'product__discount__percent' : ''}>{(product.sale) ? `-${product.sale}%` : ''}</div>
                <ul className="featured__item__pic__hover">
                    <li><a onClick={handleFavoriteClick}><i><FaHeart /></i></a></li>
                    <li><a onClick={handleProductDetailClick}><i><FaRetweet /></i></a></li>
                    <li><a onClick={handleAddCartClick}><i><FaShoppingCart /></i></a></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href="#">{product.title}</a></h6>
                <div className="product__item__price">${product.price}
                    <span>{(product.oldPrice) ? `$${product.oldPrice}` : ''}</span>
                </div>
            </div>
        </div>

    );
}

export default ProductCart;