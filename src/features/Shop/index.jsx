import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import MainShop from './pages/MainShop';
import ProductDetail from 'components/ProductDetail';

Shop.propTypes = {

};

function Shop(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} children={<MainShop />} />
            <Route path={`${match.url}/:productId`} children={<ProductDetail />} />
        </Switch>
    );
}

export default Shop;