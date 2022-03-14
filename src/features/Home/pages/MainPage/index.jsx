import React from 'react';
import PropTypes from 'prop-types';
import './MainPage.scss';
import HeaderHero from 'components/Header/HeaderHero';
import Categories from '../Categories';
import FeatureProduct from '../FeatureProduct';
import MainBanner from '../MainBanner';
import ProductSection from '../ProductSection';
import BlogSection from '../BlogSection';


MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className='mainPage'>
            <HeaderHero />
            <Categories />
            <FeatureProduct />
            <MainBanner />
            <ProductSection />
            <BlogSection />
        </div>


    );
}

export default MainPage;