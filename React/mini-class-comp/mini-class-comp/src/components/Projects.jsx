import React, { Component } from 'react';
import backimg from "../image/backimage.webp"
import SectionProjects from "./SectionProjects"
import "../css/Projects.css"

export default class Projects extends Component {
  render() {
    return <div>
    <div style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),  url(${backimg})`,height:"100vh",width:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",zIndex:"1"}}>
        <div style={{top:"45%",left:"35%",textAlign:"center",lineHeight:"1.2em",position:"absolute"}}>
            <p style={{fontFamily:"sans-serif",color:"white",fontSize:"22px"}}>SECRET OF OUT SECRET</p>
            <h2 style={{fontFamily:"sans-serif",color:"white",fontSize:"70px",fontWeight:"700"}}>Our Projects</h2>
        </div>
    </div>
    <div>
      <SectionProjects/>
    </div>
    </div>;
  }
}
