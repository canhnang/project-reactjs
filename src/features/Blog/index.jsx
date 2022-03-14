import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainBlog from './pages/MainBlog';
import BlogSidebar from './components/BlogSidebar';
import BlogDetail from './pages/BlogDetail';

Blog.propTypes = {

};

function Blog(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={`${match.url}`} children={<MainBlog />} />
                <Route path={`${match.url}/:blogId`} children={<BlogDetail />} />
            </Switch>

        </div>

    );
}

export default Blog;