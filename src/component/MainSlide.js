import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainSlide = () => {

   const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1
   };

   return (
      <mainslide className="mainslide">
         <div>
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
               <div>
                  <figure>
                     <img src="./img/slide03.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide04.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide05.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide06.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide07.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide08.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide09.jpg" alt="" />
                  </figure>
               </div>
               <div>
                  <figure>
                     <img src="./img/slide10.jpg" alt="" />
                  </figure>
               </div>

            </Slider>
         </div>
      </mainslide>

   );
}


export default MainSlide;