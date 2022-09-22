import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const MainService = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <mainservice className="mainservice">
            <div className="container">
                <Slider {...settings}>
                    <div>
                        <figure>
                            <img src="./img/slide01.jpg" alt="" />
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src="./img/slide02.jpg" alt="" />
                        </figure>
                    </div>
                </Slider>
            </div>
        </mainservice>
    )
}

export default MainService;