import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Item({img , title ,id}) {

    const navigate = useNavigate()
  return (
    <div style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "155px",
          width:"270px"
      }} onClick = {() => navigate("/detail/" +id) }>
          <div style = {{opacity:"10" , backgroundColor:"black",color:"white"}}>{title}</div>
    </div>
  )
}
