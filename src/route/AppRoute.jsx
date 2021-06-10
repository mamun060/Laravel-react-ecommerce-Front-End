import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../papes/HomePage';

class AppRoute extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
            <Switch>
                <Route  exact to={"/"} component={HomePage} />
            </Switch>
            </Fragment>
         );
    }
}
 
export default AppRoute;