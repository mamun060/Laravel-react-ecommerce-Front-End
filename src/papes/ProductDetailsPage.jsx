/* eslint-disable eqeqeq */
import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop";
import NavMenuMobile from "../component/common/NavMenuMobile";
import FooterDesktop from "../component/common/FooterDesktop";
import FooterMobile from "../component/common/FooterMobile";
//import SuggestedProducts from "../component/ProductDetails/SuggestedProducts";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import axios from "axios";
import ApiURL from "../api/ApiURL";
//import SliderLoader from "../components/placeholder/SliderLoader";
import ProductDetailsPlaceholder from "../component/placeholder/ProductDetailsPlaceholder";


class ProductDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            code:match.params.code,
            ProductData:[],
            isLoading:"BetweenTwoSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        window.scroll(0,0);

        axios.get(ApiURL.ProductDetails(this.state.code)).then(response=> {
            this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

        });

    }

    render() {

        if(this.state.MainDiv=="d-none"){

            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop/>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile/>
                    </div>
                
                    <ProductDetailsPlaceholder isLoading={this.state.isLoading}/>
                    <div className="Desktop">
                        <FooterDesktop/>
                    </div>
                    <div className="Mobile">
                        <FooterMobile/>
                    </div>

                </Fragment>

            );
        }
        
        else{
            
            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop/>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile/>
                    </div>

                    <ProductDetails ProductData={this.state.ProductData}/>

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
}

export default ProductDetailsPage;