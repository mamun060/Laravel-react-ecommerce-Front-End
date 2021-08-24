import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import axios from "axios";
import ApiURL from "../../api/ApiURL";


class Collection extends Component {
    
    constructor(){
        super();
        this.state={
            ProductData:[]
        }
    }

    componentDidMount(){
        axios.get(ApiURL.ProductListByRemark("COLLECTION")).then(response=>{
            this.setState({ProductData:response.data})
        }).catch(error=>{

        });
    }


    render() {
        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductList,i)=>{
        
        if(ProductList.special_price=="NA"){
            return <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
            <Card className="card h-100 w-100  image-box ">
               <img src={ProductList.image} alt=""/>
               <Card.Body>
                   <h5 className="product-name-on-card">{ProductList.title }</h5>
                   <p className="product-price-on-card">Price: { ProductList.price}TK</p>
               </Card.Body>
           </Card>
          </Col>
        } 
        else {
            return <Col key={1} lg={3} xl={3} md={3} sm={4} xs={6}>
            <Card className="card h-100 w-100  image-box ">
                <img src={ProductList.image} alt=""/>
                <Card.Body>
                    <h5 className="product-name-on-card">{ProductList.title }</h5>
                    <p className="product-price-on-card">
                        Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                    </p>
                </Card.Body>
            </Card>
          </Col>
        }

        });


        return ( 
            <Fragment>
                <Container className="text-center">
                    <h4 className="section-title"> The Best Collection </h4>
                    <h6 className="section-sub-title"> Please your letest product </h6>
                </Container>
                 <Row>

                  {MyView}
                    
                 </Row>
            </Fragment>
         );
    }
}
 
export default Collection;