import Header from 'components/Header';
import Footer from 'components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/base.scss';
import './assets/style/responsive.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainPage from 'features/Home/pages/MainPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from 'components/NotFound';
import React, { Suspense } from 'react';
import HeaderMobile from 'components/Header/HeaderMobile';
const Shop = React.lazy(() => import('features/Shop'));
const Blog = React.lazy(() => import('features/Blog'));


function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <div className='app'>
          <Header />
          <HeaderMobile />
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path='/home' children={<MainPage />} />
            <Route path='/shop' children={<Shop />} />
            <Route path='/blog' children={<Blog />} />
            {/* <Route path="" children={<NotFound />} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
