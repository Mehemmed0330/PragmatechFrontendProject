import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Item from "../Home/Item"
import "../Home/MiniSlider.css"

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

export default function CustomArrows({title ,movies}) {
   
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
    };



    return (
      <div style = {{}}>
        <h2 style = {{color:"white"}}>{title}</h2>
        <Slider {...settings}>
          
          {movies.map((s, i) => <Item  key={i} img={s.img} title={s.title}/>)}
          
        </Slider>
      </div>
    );
  
}