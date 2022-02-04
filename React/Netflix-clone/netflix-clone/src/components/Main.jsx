import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../src/image/slider1.jpg"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 70000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div style={{display:"flex",position:"relative",width:"100%", height:"435px",justifyContent:"space-between"}}>
            <div style={{}}>
              <div style={{position:"absolute",height:"100%" ,width:"40%",color:"white",backgroundImage:"linear-gradient(to right, #000000,#000000, #002120)"}}>
                <div className="name"><h1>Stargate Universe</h1></div>
                <div className="date"><h4>99% Match 2009-2011 2 Seasons</h4></div>
                <div className="textabout"><p>Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth</p></div>
                <div className="textpersons"><p>Starring: Robert Carlyle, Louis Ferreira, Brian J. SmithGenre:Sci-fi,Fantasy,Drama</p> </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${slider1})`, width:"70%", height:"100%",objectFit:"cover",backgroundPosition:"center",backgroundSize:"cover"} }></div>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}