import React from 'react';
import './Header.scss';
import HeaderMain from './HeaderMain';
import HeaderTop from './HeaderTop';


Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <div className="humberger__menu__overlay"></div>
            <HeaderTop />
            <HeaderMain />
        </header>
    );
}

export default Header;