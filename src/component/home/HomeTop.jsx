import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import ApiURL from "../../api/ApiURL";
import axios from 'axios';

class HomeTop extends Component {
        
    constructor() {
            super();
            this.state={
                MenuData:[],
                SliderData:[]
            }
        }


        componentDidMount() {

            axios.get(ApiURL.SendCategoryDetails).then(response=> {
              this.setState({ MenuData:response.data })
            }).catch(error=> {

            });

            // home slider section dynamic data get
            axios.get(ApiURL.SendSliderInfo).then(response=> {
              this.setState({ SliderData:response.data })
            }).catch(error=> {

            });
        }


    render() {
        return (
            <Fragment>
                <Container className="p-0 TopSection  overflow-hidden" fluid={true}>
                    <Row className="p-0 m-0 overflow-hidden">
                        <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                                <MegaMenu data={this.state.MenuData} />
                        </Col>
                        <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                                <SliderHome data={this.state.SliderData} />
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default HomeTop;