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


class AppRoute extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
            <Switch>
                <Route  exact path={"/"} component={HomePage} />
                <Route  exact path={"/onboard"} component={UserOnboardPage} />
                <Route  exact path={"/contact-us"} component={ContactPage} />
                <Route  exact path={"/about"} component={AboutPage} />
                <Route  exact path={"/policy"} component={PolicyPage} />
                <Route  exact path={"/purchase"} component={PurchasePage} />
                <Route  exact path={"/refund"} component={RefundPage} />
                <Route  exact path={"/productdetails"} component={ProductDetailsPage} />
                <Route  exact path={"/pushnotification"} component={NotificationPage} />
                <Route  exact path={"/favourite"} component={FavouritePage} />
                <Route  exact path={"/cart"} component={CartPage} />
                <Route  exact path={"/order"} component={OrderPage} />

                <Route  exact path="/ProductListByCategory/:Category" component={ProductListByCategory}/>
                <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" component={ProductListBySubCategory}/>

            </Switch>
            </Fragment>
         );
    }
}
 
export default AppRoute;