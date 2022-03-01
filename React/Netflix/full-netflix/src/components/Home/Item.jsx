import React from 'react'

export default function Item({img , title}) {
  return (
    <div style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
          width:"400px"
      }}>
          <div style = {{opacity:"10" , backgroundColor:"black",color:"white"}}>{title}</div>
    </div>
  )
}
