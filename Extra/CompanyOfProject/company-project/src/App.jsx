import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Driver from "./components/beDriver"
import Customer from "./components/beCustomer"
import Contact from "./components/Contact"
import Companies from "./components/Companies"
import Cash from "./components/Cash"

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/cash" element={<Cash />} />
      </Routes>
    </div>
  )
}
