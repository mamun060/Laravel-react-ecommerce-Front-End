/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Container,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class FooterDesktop extends Component {
    render() {
        return (
                <div className="m-0 bg-white mt-5 pt-3 shadow-sm">
                    <Container>
                        <Row className="px-0 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                                <p>BigExpress is considered to be the ‘game-changer’ in Bangladesh’s  industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made BigExpress a beloved brand at home and abroad.</p>
                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                                <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                                <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br/>
                                <Link to="/contact-us" className="footer-link">Contact Us</Link><br/>
                                <a className="footer-link">Our Team</a><br/>
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                <p> 34/1, South Kamalapur, Bazar Road, Motijheel, Dhaka-1200, 01637813648 (Help-Line), almamun.raju520@gmail.com</p>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link ><br/>
                                <Link to="/policy" className="footer-link">Privacy Policy</Link ><br/>
                                <Link to="/refund" className="footer-link">Refund Policy</Link ><br/>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                <a><img className="" src="https://hatil.com/sites/default/files/Apple%20sign.png" alt="" /></a><br/>
                                <a><img className="mt-2" src="https://hatil.com/sites/default/files/Android%20sign.png"  alt="" /></a>
                        
                                <div className="google-translate-button-position" id="google_translate_element"></div>    
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0">
                                <h6 className="text-white">WE DELIVER IN</h6>
                                <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Row>
                        </Container>
                    </Container>
                </div>

        );
    }
}

export default FooterDesktop;