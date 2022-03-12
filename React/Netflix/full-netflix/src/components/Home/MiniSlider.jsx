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
      style={{ ...style, display: "flex", background: "rgba(0,0,0,0.1)", height: "100%", width: "50px", alignItems: "center", justifyContent: "center", position: "absolute", margin: "0px 0px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "rgba(0,0,0,0.1)", height: "100%", width: "50px", alignItems: "center", justifyContent: "center", position: "absolute", zIndex: "100", color: "white", margin: "0px -20px", fontSize: "50px" }}
      onClick={onClick}
    />
  );
}

export default function CustomArrows({ title, movies }) {

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };



  return (
    <div style={{ padding: "0px 40px" }}>
      <h2 style={{ color: "white" }}>{title}</h2>
      <Slider {...settings}>

        {movies.map((s, i) => <Item key={i} id={s.id} type={s.type} img={s.img} title={s.title} />)}

      </Slider>
    </div>
  );

}