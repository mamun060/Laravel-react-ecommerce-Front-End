import React, { Component, Fragment } from 'react';
import Slider from "react-slick";

class SliderHome extends Component {

    render() { 
        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const SliderData=this.props.data;
        const SliderView=  SliderData.map((SliderList,i)=>{

            return <div className="container-fluid m-0 p-0 overflow-hidden w-100  shadow-sm">
              <div style={{backgroundColor:SliderList.bg_color}} className="m-0 p-0">
                <div className="row card-body">
                    <div className="col-md-6 sliderTitleDiv text-center">
                        <h1 style={{color:SliderList.text_color}} className="sliderTitle">{SliderList.title}</h1>
                        <h1 style={{color:SliderList.text_color}} className="sliderSubTitle">
                            {SliderList.sub_title}
                        </h1>
                        <a href="" className="btn site-btn px-5">More Info</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="sliderImg" src={SliderList.image} alt="" />
                    </div>
                </div>
            </div>
            </div>
 
         })

    
        return ( 
            <Fragment>
                  <Slider {...settings}>
                    {SliderView}
                </Slider>
            </Fragment>
         );
    }
}
 
export default SliderHome;