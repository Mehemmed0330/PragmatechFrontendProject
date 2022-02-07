import React ,{Fragment, useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom"
import { context } from "../App";

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

export default function CustomArrows()  {
    const allData = useContext(context);
    const navigate = useNavigate();
  
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div>
          {allData.map(dataa=>
          <Fragment key={dataa.id}>
          <div>{dataa.catagoryName}</div>
            <Slider {...settings}>
            {dataa.movies.map((underdata)=>
            
                <div key={underdata.id}>
                    <div>
                <div style={{display:"flex"}}>
                    <div style={{backgroundImage:`url(${underdata.miniimage})`,height:"150px" , width:"400px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",cursor:"pointer",margin:"0px 5px"}} 
                        onClick={()=>{navigate("/detail/"+dataa.id+"/"+underdata.id)}}
                    ></div>
                 </div>
               </div>
                  </div>
                 

            )}
        </Slider>
        </Fragment>
          

          )}
        
      
      </div>
    );
  
}