import React from "react";
import Slider from "react-slick";
import UnderSlider from "./UnderSlider"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../src/image/slider1.jpg"
import slider2 from "../../src/image/slider2.jpg"
import slider3 from "../../src/image/slider3.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "rgba(0,0,0,0.1)",height:"100%" , width:"50px", alignItems:"center" , justifyContent:"center",position:"absolute",margin:"0px 20px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "rgba(0,0,0,0.1)" , height:"100%" , width:"50px", alignItems:"center" , justifyContent:"center",position:"absolute",zIndex:"100",color:"white",margin:"0px 20px",fontSize:"50px" }}
      onClick={onClick}
    />
  );
}

export default function AutoPlay() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const topSliderData = [
      {id:1 ,
       name:"Stargate Universe",
       img:slider1,
       date:"99% Match 2009-2011 2 Seasons",
       topabout:"Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.",
       underabout:"Starring: Robert Carlyle, Louis Ferreira, Brian J. Smith Genre:Sci-fi,Fantasy,Drama"
      },
      {id:2 ,
        name:"Interstaller",
        img:slider2,
        date:"96% Match 2014 PG-13",
        topabout:"With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
        underabout:"Starring: Mathew McConaughey, Anne Hathaway, Jessica Chastain Genre: Sci-fi, Fantasy, Mystery"
       },
       {id:3 ,
        name:"Step Brothers",
        img:slider3,
        date:"92% Match 2008 R",
        topabout:"Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.",
        underabout:"Starring: Will Ferrell, John C. Reilly, Mary Steenburgen Genre: Comedy, Late Night Comedies, Slapstick Comedy"
       }
    ]
    
    return (
      <div>
        <Slider {...settings}>
        {topSliderData.map((data)=>(
          <div key={data.id}>
                 <div style={{display:"flex",position:"relative",width:"100%", height:"435px",justifyContent:"space-between"}}>
                 <div style={{}}>
                   <div style={{position:"absolute",height:"100%" ,width:"40%",color:"white",backgroundColor:"rgba(0,0,0,0.3)" ,backgroundImage:"linear-gradient(to right, #000000,#000000, #002020)",padding:" 0px 30px"}}>
                     <div className="name"><h1>{data.name}</h1></div>
                     <div className="date"><h4>{data.date}</h4></div>
                     <div className="textabout"><p>{data.topabout}</p></div>
                     <div className="textpersons"><p>{data.underabout}</p> </div>
                   </div>
                 </div>
                 <div style={{backgroundImage:`url(${data.img})`, width:"70%", height:"100%",objectFit:"cover",backgroundPosition:"center",backgroundSize:"cover"} }></div>
                 </div>
          </div>
          ))}
        </Slider>
        <UnderSlider/>
      </div>
     
    );
}
