import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import ContactPage from '../papes/ContactPage';
import HomePage from '../papes/HomePage';
import UserOnboardPage from '../papes/UserOnboardPage';
import AboutPage from '../papes/AboutPage';
import PolicyPage from '../papes/PolicyPage';
import PurchasePage from '../papes/PurchasePage';
import RefundPage from '../papes/RefundPage';
import ProductDetailsPage from '../papes/ProductDetailsPage';
import NotificationPage from '../papes/NotificationPage';
import FavouritePage from '../papes/FavouritePage';
import CartPage from '../papes/CartPage';
import OrderPage from '../papes/OrderPage';
import ProductListByCategory from '../papes/ProductListByCategory';
import ProductListBySubCategory from '../papes/ProductListBySubCategory';

import SearchPage from '../papes/SearchPage';


class AppRoute extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
            <Switch>
                <Route  exact path={"/"} render={(props) => <HomePage {...props} key={Date.now()}/>} />
                <Route  exact path={"/onboard"} render={(props) => <UserOnboardPage {...props} key={Date.now()}/>} />
                <Route  exact path={"/contact-us"} render={(props) => <ContactPage {...props} key={Date.now()}/>} />
                <Route  exact path={"/about"} render={(props) => <AboutPage {...props} key={Date.now()}/>}/>
                <Route  exact path={"/policy"} render={(props) => <PolicyPage {...props} key={Date.now()}/>}/>
                <Route  exact path={"/purchase"} render={(props) => <PurchasePage {...props} key={Date.now()}/>}/>
                <Route  exact path={"/refund"} render={(props) => <RefundPage {...props} key={Date.now()}/>}/>
                <Route  exact path="/productDetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()}/>}/>
                <Route  exact path={"/pushnotification"} render={(props) => <NotificationPage {...props} key={Date.now()}/>} />
                <Route  exact path={"/favourite"} render={(props) => <FavouritePage {...props} key={Date.now()}/>} />
                <Route  exact path={"/cart"} render={(props) => <CartPage {...props} key={Date.now()}/>} />
                <Route  exact path={"/order"} render={(props) => <OrderPage {...props} key={Date.now()}/>} />

                <Route  exact path="/ProductListByCategory/:Category" render={(props) => <ProductListByCategory {...props} key={Date.now()}/>}/>
                <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" render={(props) => <ProductListBySubCategory {...props} key={Date.now()}/>}/>

                
                <Route exact path="/ProductListBySearch/:SearchKey" render={(props) => <SearchPage {...props} key={Date.now()}/>}/>
                
            </Switch>
            </Fragment>
         );
    }
}
 
export default AppRoute;