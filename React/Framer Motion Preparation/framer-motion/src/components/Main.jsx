import React from 'react'
import { motion } from "framer-motion"
export default function Main() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div style={{ width: "60%", margin: "0px auto", height: "100vh" }}>
      <video autoPlay loop muted style={{ width: "100%", height: "100vh", position: "absolute", top: "0", right: "0", left: "0", bottom: "0", objectFit: "cover", zIndex: "-1" }}>
        <source
          src="https://admin.lecrans.com/uploads/atmosphere_sans_logo_eea7a4d54f.mp4"
          type="video/mp4"
        />
      </video>
      <div className="text-content" style={{ width: "60%", margin: "0px auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50% , -50%)", textAlign: "center" }}>
        <motion.h1 variants={variants} initial="hidden" animate="visible" transition={{ delay: 1, duration: 1 }} style={{ margin: "0px", fontSize: "4rem", fontWeight: "300", color: "white" }}>Your Mountain Home</motion.h1>
        <motion.p variants={variants} initial="hidden" animate="visible" transition={{ delay: 2, duration: 1 }} style={{ fontWeight: "600", color: "white" }}>An Alpine haven of warmth, tranquillity and restoration</motion.p>
      </div>
    </div>
  )
}
