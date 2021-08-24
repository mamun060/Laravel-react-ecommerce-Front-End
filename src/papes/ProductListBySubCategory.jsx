import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop";
import NavMenuMobile from "../component/common/NavMenuMobile";
import FooterDesktop from "../component/common/FooterDesktop";
import FooterMobile from "../component/common/FooterMobile";
import ListBySubCategory from '../component/ProductDetails/ListBySubCategory';
import axios from "axios";
import ApiURL from "../api/ApiURL";

class ProductDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            SubCategory:match.params.SubCategory,
            Category:match.params.Category,
            ProductData:[]
        }

    }


    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory)).then(response=> {
            this.setState({ProductData:response.data})
        }).catch(error=> {

        });
    }

    render() {
        return (
            <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop/>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile/>
                    </div>

                    <ListBySubCategory SubCategory={this.state.SubCategory}  ProductData={this.state.ProductData} />

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

export default ProductDetailsPage;