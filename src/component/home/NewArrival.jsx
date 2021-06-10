import React, { Component,Fragment } from 'react';
import { Container, Card, Button} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)

    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
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

        return ( 
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
                <div>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                       <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                         <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                       <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                         <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                        <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                <div>
                         <Card className="image-box">
                            <img src="http://superadmin.laptopcitypro.com/storage/app/public/MMCVCoykz1xe6te9QDk60qzdP2cwU2T0crdniQU4.png" alt="" />
                            
                            <Card.Body>
                                <p className="product-name-on-card">This Lenovo Leptop</p>
                                <p className="product-price-on-card"><span>Price:</span>1200$</p>
                            </Card.Body>
                        </Card>
                </div>
                
                </Slider>
           </Container>
         );
    }
}
 
export default NewArrival;