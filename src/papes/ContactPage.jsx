import React, { Component ,Fragment } from 'react';
import NavMenuDesktop from '../component/common/NavMenuDesktop';
import NavMenuMobile from '../component/common/NavMenuMobile';
import FooterDesktop from '../component/common/FooterDesktop';
import FooterMobile from '../component/common/FooterMobile';
import Contact from '../component/common/Contact';


class ContactPage extends Component {
    
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

             <Contact />

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
 
export default ContactPage;