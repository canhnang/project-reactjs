import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FeatureProduct.scss';
import ProductCart from 'components/ProductCart';
import { useSelector, useDispatch } from 'react-redux';

FeatureProduct.propTypes = {

};

function FeatureProduct(props) {
    const [featureProduct, setFeatureProduct] = useState('All');
    const listProduct = useSelector(state => state.products);

    const listFeature = ['All', 'Oranges', 'Fresh Meat', 'Vegetables', 'Fastfood'];

    const handleFeatureClick = (item) => {
        setFeatureProduct(item)
    }
    const products = (featureProduct === 'All') ? listProduct : listProduct.filter(product => product.category === featureProduct);

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                {listFeature.map((item, index) => {

                                    <li key={index} onClick={() => handleFeatureClick(item)} className={(featureProduct === item) ? 'active' : ''}>{item}</li>

                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <ProductCart
                                    product={product}
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default FeatureProduct;