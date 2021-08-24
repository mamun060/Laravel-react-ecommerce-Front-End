import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {toast, ToastContainer} from "react-toastify";

class Purchase extends Component {
   constructor(){
       super();
       this.state={
           purchase_guide_line: "",
           loaderDiv:"",
           mainDiv:"d-none",
       }
   }

   componentDidMount(){

       let SitePurchaseGuide = sessionStorage.getItem('SendSiteInfo');
       
       if(SitePurchaseGuide == null){

        axios.get(ApiURL.SendSiteInfo).then(response=>{
            let StatusCode =  response.status;
            if(StatusCode == 200){
             let JSONData = (response.data)[0]['purchase_guide'];
             this.setState({purchase_guide_line:JSONData, loaderDiv:"d-none", mainDiv:""})
             sessionStorage.setItem("SitePurchaseGuide", JSONData);
            }
            else{
             toast.error("Something Went Wrong ! Try Again",{
                 position:"bottom-center"
             });
            }
        }).catch(error=>{
         toast.error("Something Went Wrong ! Try Again",{
             position:"bottom-center"
         });
        });
       }

       else{
        this.setState({purchase_guide_line:SitePurchaseGuide, loaderDiv:"d-none", mainDiv:""})
       }
   
   }


    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>

                        <Card className={this.state.loaderDiv}>
                                <Card.Body>
                                    <div className="ph-item">
                                        <div className="ph-col-12">
                                            <div className="ph-row">
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ph-item">
                                        <div className="ph-col-12">
                                            <div className="ph-row">
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                                <div className="ph-col-12"></div>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>

                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                { ReactHtmlParser(this.state.purchase_guide_line) }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Purchase;