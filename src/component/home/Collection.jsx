import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

class Collection extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Container>
                    <h4 className="section-title"> The Best Collection </h4>
                    <h6 className="section-sub-title"> Please your letest product </h6>
                </Container>
                 <Row>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                 </Row>
            </Fragment>
         );
    }
}
 
export default Collection;