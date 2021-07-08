import React, { Component, Fragment } from 'react';
import {Container, Card, Row, Col} from 'react-bootstrap';

class FeaturedProducts extends Component {
    state = {  }
    render() {
        return ( 
        <Fragment>
            <Container className="text-center" fluid={true}>
                <h4 className="section-title"> Feature product </h4>
                <h6 className="section-sub-title"> All 2020 product is here </h6>
                <Row>
                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col key={1} lg={2} xl={2} md={2} sm={4} xs={6}>
                    <Card className="image-box">
                        <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                        <Card.Body>
                            <p className="product-name-on-card">This Lenovo Leptop</p>
                            <p className="product-price-on-card"><span>Price:</span>1200$</p>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
            </Container>
        </Fragment> 
        );
    }
}
 
export default FeaturedProducts;
