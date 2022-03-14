import React from 'react';
import PropTypes from 'prop-types';

MainBanner.propTypes = {

};

function MainBanner(props) {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="https://technext.github.io/ogani/img/banner/banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="https://technext.github.io/ogani/img/banner/banner-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;