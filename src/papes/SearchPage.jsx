import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiURL from "../api/ApiURL";
import NavMenuDesktop from "../component/common/NavMenuDesktop";
import NavMenuMobile from "../component/common/NavMenuMobile";
import ProductListLoader from "../component/placeholder/ProductListLoader";
// eslint-disable-next-line no-unused-vars
import ListByCategory from "../component/ProductDetails/ListByCategory";
import FooterDesktop from "../component/common/FooterDesktop";
import FooterMobile from "../component/common/FooterMobile";
import SearchList from "../component/ProductDetails/SearchList";

class SearchPage extends Component {

    constructor({match}) {
        super();
        this.state={
            SearchKey:match.params.SearchKey,
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none"
        }

    }


    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.ProductListBySearch(this.state.SearchKey)).then(response=> {
            this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "})
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

                <ProductListLoader isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <SearchList SearchKey={this.state.SearchKey}  ProductData={this.state.ProductData} />
                </div>

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

export default SearchPage;