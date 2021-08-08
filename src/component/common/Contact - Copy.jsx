/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import validation from '../../validation/validation';
import axios from 'axios';
import ApiURL from '../../api/ApiURL';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';


class Contact extends Component {

    constructor(){
        super();
        this.state={
            name: "",
            phone: "",
            mgs: ""
        }
    }

    nameOnChange=(event)=>{
        let name= event.target.value;
        this.setState({name:name})
    }

    mobileOnChange=(event)=>{
        let mobile= event.target.value;
        this.setState({mobile:mobile})
    }

    messageOnChange=(event)=>{
        let mgs= event.target.value;
        this.setState({mgs:mgs})
    }

    onFormSubmit=(event)=>{
        let name=this.state.name;
        let mobile=this.state.mobile;
        let msg=this.state.msg;
        let sendBtn=document.getElementById('sendBtn');
        let contactForm=document.getElementById('contactForm');

        // eslint-disable-next-line eqeqeq
        if(name.length==0){
            toast.error("Name Required",{
                position:"bottom-center"
            });
        }
        // eslint-disable-next-line eqeqeq
        else if(mobile.length==0){
            toast.error("Mobile Number Required",{
                position:"bottom-center"
            });
        }

        else if(!(validation.NameRegx).test(name)){
            toast.error("Invalid Name",{
                position:"bottom-center"
            });
        }
        else if(!(validation.MobileRegx).test(mobile)){
            toast.error("Invalid Mobile Number",{
                position:"bottom-center"
            });
        }
        // eslint-disable-next-line eqeqeq
        else if(msg.length==0){
            toast.error("Please Write Your Message",{
                position:"bottom-center"
            });
        }
        else{
            sendBtn.innerHTML="Sending...";
            let MyFormData=new FormData();
            MyFormData.append("name",name)
            MyFormData.append("mobile",mobile)
            MyFormData.append("message",msg)

            axios.post(ApiURL.SendContactDetails,MyFormData).then(function (response) {
                if(response.status==200 && response.data==1){
                    toast.success("Request Success",{
                        position:"bottom-center"
                    });
                    sendBtn.innerHTML="Send";
                    contactForm.reset();
                }
                else{
                    toast.error("Request Fail ! Try Again",{
                        position:"bottom-center"
                    });
                    sendBtn.innerHTML="Send"
                }
            }).catch(function (error) {
                toast.error("Request Fail ! Try Again",{
                    position:"bottom-center"
                });
                sendBtn.innerHTML="Send"
            })
        }
    event.preventDefault();
  }

    
    render() { 
        return ( 
            <Fragment>
                <Container className="TopSection">
          
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                     <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.messageOnChange} className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">Send</Button>
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