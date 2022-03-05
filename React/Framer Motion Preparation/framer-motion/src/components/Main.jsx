import React from 'react'
import { motion } from "framer-motion"
export default function Main() {
  const variants = {
    hidden: { opacity: 0 , y : 20 },
    visible: { opacity: 1 , y:0 },
  }
  return (
      <div style = {{width:"60%" , margin:"0px auto" }}>
          <div className="text-content" style = {{width:"60%" ,margin:"0px auto" ,position:"absolute" , top:"50%" , left:"50%" ,transform:"translate(-50% , -50%)" , textAlign:"center"}}>
              <motion.h1 variants = {variants} initial = "hidden" animate = "visible" transition={{ delay: 1 , duration:1 }} style = {{margin:"0px" , fontSize:"4rem" , fontWeight:"300" , color:"white"}}>Your Mountain Home</motion.h1>
              <motion.p variants = {variants} initial = "hidden" animate = "visible" transition={{ delay: 2 , duration:1 }} style = {{fontWeight:"600" ,color:"white"}}>An Alpine haven of warmth, tranquillity and restoration</motion.p>
          </div>
    </div>
  )
}
