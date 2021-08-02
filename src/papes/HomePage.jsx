import React, {Component, Fragment } from 'react';
import FeaturedProducts from '../component/home/FeaturedProducts';
import Categories from '../component/home/Categories';
import Collection from '../component/home/Collection';
import NewArrival from '../component/home/NewArrival';
import HomeTop from '../component/home/HomeTop';
import NavMenuDesktop from '../component/common/NavMenuDesktop';
import NavMenuMobile from '../component/common/NavMenuMobile';
import HomeTopMobile from '../component/home/HomeTopMobile';
import FooterDesktop from '../component/common/FooterDesktop';
import FooterMobile from '../component/common/FooterMobile';
import axios from 'axios';
import ApiURL from '../api/ApiURL';

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.GetVisitorDetails();
    }

    GetVisitorDetails=()=>{
        axios.get(ApiURL.VisitorDetails).then().catch();
    }
    
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                    <HomeTop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                </div>

                <FeaturedProducts/>
                <NewArrival/>
                <Collection/>
                <Categories/>

                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;