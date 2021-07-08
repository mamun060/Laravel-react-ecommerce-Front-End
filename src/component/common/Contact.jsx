/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';


class Contact extends Component {
    render() { 
        return ( 
            <Fragment>
                <Container className="TopSection">
          
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className=" onboardForm">
                                        <h4 className="section-title">USER SING IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                      
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Your Name"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Your Phone"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Your Messsage"/>
                                        </Form.Group>

                                        <Button className="btn btn-block m-2 site-btn">SEND</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <iframe className="GoogleMap"
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.6976191258681!2d90.42184931432053!3d23.725356067809372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85020dde33b%3A0x70581a30763056f6!2z4Ka54KeA4Kaw4Ka-4Kad4Ka_4KayIOCmueCni-Cmn-Cnh-Cmsg!5e0!3m2!1sbn!2sbd!4v1623695068098!5m2!1sbn!2sbd" width="600" height="450" allowfullscreen="" loading="lazy">
                                </iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                   
                </Container>
            </Fragment>
         );
    }
}
 
export default Contact;