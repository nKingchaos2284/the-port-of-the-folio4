import React from 'react';
import Slider from 'react-slick';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  
  
  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        <div>
          <img src= "./img/portfolio/chaos/king1.png" alt="king1" />
        </div>
        <div>
          <img src="./img/portfolio/chaos/king1.png" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
