import React, {Component, Fragment } from 'react';
import Categories from '../component/home/Categories';
import Collection from '../component/home/Collection';
// import {Container, Row, Col, Card} from 'react-bootstrap'
import FeatureProducts from '../component/home/FeatureProducts'
import NewArrival from '../component/home/NewArrival';
import HomeTop from '../component/home/HomeTop';
import NavMenuDesktop from '../component/common/NavMenuDesktop';

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
              <NavMenuDesktop />
                  <HomeTop />
                    <NewArrival />
                      <FeatureProducts />
                        <Collection />
                          <Categories />
            </Fragment>
         );
    }
}
 
export default HomePage;