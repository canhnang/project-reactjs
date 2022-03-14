import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Link } from 'react-router-dom';

LinkNav.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    activeOnlyWhenExact: PropTypes.bool,

};

LinkNav.defaultProps = {
    label: "",
    to: "",
    activeOnlyWhenExact: false,
}

function LinkNav(props) {
    const { label, to, activeOnlyWhenExact } = props;
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <div className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </div>
    );
}

export default LinkNav;