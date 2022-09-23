import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const MainService = () => {

    const settings = {
        vertical : true,
        draggable : true, 
        autoplay : true,
        autoplaySpeed : 3000,
        pauseOnHover : true,
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
                        <div className="wrap">
                            <div className="service">
                                <h3>술 픽업</h3>
                                <p>술을 주문하고 일반 식당에서 픽업하는 <br />
                                    새로운 경험의 서비스입니다.</p>
                                <div className="border top">
                                    <p>전국 픽업 매장</p>
                                    <p>1,141개</p>
                                </div>
                                <div className="border bottom">
                                    <p>주문 가능한 상품</p>
                                    <p>1,690개</p>
                                </div>
                            </div>
                            <div className="mokup">
                                <figure className="mokup_back">
                                    <img src="./img/pickup-mockup.png" alt="" />
                                </figure>
                                <figure className="mokup_front">
                                    <img src="./img/pickup-mockup_2.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="wrap">
                            <div className="service">
                                <h3>술픽업 NOW</h3>
                                <p>여러 리쿼샵의 다양한 상품을 <br/>
한눈에 확인할 수 있는 서비스입니다.</p>
                                <div className="border top">
                                    <p>전국 픽업 매장</p>
                                    <p>78개</p>
                                </div>
                                <div className="border bottom">
                                    <p>주문 가능한 상품</p>
                                    <p>9,914개</p>
                                </div>
                            </div>
                            <div className="mokup">
                                <figure className="mokup_back">
                                    <img src="./img/pickup-now.png" alt="" />
                                </figure>
                                <figure className="mokup_front">
                                    <img src="./img/pickup-now_2.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="wrap">
                            <div className="service">
                                <h3>캔맥주 멤버십</h3>
                                <p>전국 CU 편의점에서 이용 가능한 <br/>
캔맥주 구독 멤버십입니다.</p>
                                <div className="border top">
                                    <p>전국 픽업 매장</p>
                                    <p>1,141개</p>
                                </div>
                                <div className="border bottom">
                                    <p>주문 가능한 상품</p>
                                    <p>1,690개</p>
                                </div>
                            </div>
                            <div className="mokup">
                                <figure className="mokup_back">
                                    <img src="./img/cu-mockup.png" alt="" />
                                </figure>
                                <figure className="mokup_front">
                                    <img src="./img/cu-mockup_2.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                   





                </Slider>
            </div>
        </mainservice>
    )
}

export default MainService;