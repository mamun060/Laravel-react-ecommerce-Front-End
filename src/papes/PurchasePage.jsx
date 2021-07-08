import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop";
import NavMenuMobile from "../component/common/NavMenuMobile";
// eslint-disable-next-line no-unused-vars
import Contact from "../component/common/Contact";
import FooterDesktop from "../component/common/FooterDesktop";
import FooterMobile from "../component/common/FooterMobile";
// eslint-disable-next-line no-unused-vars
import Policy from "../component/Others/Policy";
import Purchase from "../component/Others/Purchase";

class PurchasePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
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

                <Purchase/>

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

export default PurchasePage;