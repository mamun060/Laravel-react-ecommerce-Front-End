/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from 'react';
import { Container, Card, Button} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import NewArrivalPlaceholder from "../placeholder/NewArrivalPlaceholder";

class NewArrival extends Component {

    constructor(props){
        super(props);
        this.state={
            ProductData:[],
            isLoading:"TopSection",
            MainDiv:"d-none"
        }
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)

    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    componentDidMount(){
    axios.get(ApiURL.ProductListByRemark("NEW")).then(response=>{
        this.setState({ProductData:response.data, isLoading:"d-none",MainDiv:" "})
    }).catch(error=>{

    });
    }

    render() { 

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed:3000,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };


          const MyList= this.state.ProductData;

          const MyView = MyList.map((ProductList,i)=>{

              if(ProductList.special_price=="NA"){
               return <div>
                <Link to="/productdetails"> 
                    <Card className="card text-center w-100 image-box">
                    <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.title }</p>
                            <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
              }
              else {
                return <div>
                <Link to="/productdetails"> 
                    <Card className="card text-center w-100 image-box">
                    <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card">
                            Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                            </p>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
              }
          })

        return ( 

          <Fragment>
            <NewArrivalPlaceholder isLoading={this.state.isLoading}/>

           <div className={this.state.MainDiv}>
           <Container className="text-center BetweenTwoSection" fluid={true}>
              <h4 className="section-title px-0 mx-0 ">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </h4>
                <h6 className="section-sub-title"> All New Arrival 2020 product</h6>

                <Slider ref={c=>(this.slider=c)} {...settings}>
                    {MyView}
                </Slider>
           </Container>
           </div>

          </Fragment>
         );
    }
}
 
export default NewArrival;