import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useAPI from "../hook/api"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" , right:"-25px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" , left:"-25px" }}
      onClick={onClick}
    />
  );
}

export default function CustomArrows() {

  const {movies} =  useAPI()
  console.log(movies)
   
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    

    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          
        </Slider>
      </div>
    );
  
}