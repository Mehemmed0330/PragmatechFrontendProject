import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import minislider1 from "../../src/image/minislider1.jpg"
import minislider2 from "../../src/image/minislider2.jpg"
import minislider3 from "../../src/image/minislider3.jpg"
import minislider4 from "../../src/image/minislider4.jpg"
import minislider5 from "../../src/image/minislider5.jpg"
import minislider6 from "../../src/image/minislider6.jpg"
import minislider7 from "../../src/image/minislider7.jpg"


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

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const underSliderData = [
        {   id:1,
            miniimage:minislider1,
            categorie:"Trending Now"
        },
        {   id:2,
            miniimage:minislider2,
        },
        {
            id:3,
            miniimage:minislider3
        },  
        {
            id:4,
            miniimage:minislider4
        },
        {
            id:5,
            miniimage:minislider5
        },
        {
            id:6,
            miniimage:minislider6
        },
        {
            id:7,
            miniimage:minislider7
        }
    ]
    return (
      <div>
        
        <Slider {...settings}>
            {underSliderData.map((underdata)=>
            
                <div>
                    {/* <div><p>{underdata.categorie}</p></div> */}
                    <div key={underdata.id}>
                    
                <div style={{display:"flex"}}>
                    <div style={{backgroundImage:`url(${underdata.miniimage})`,height:"150px" , width:"400px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",cursor:"pointer",margin:"0px 5px"}} 
                    
                    ></div>
                 </div>
               </div>
                    </div>
                 

            )}
        </Slider>
      </div>
    );
  }
}