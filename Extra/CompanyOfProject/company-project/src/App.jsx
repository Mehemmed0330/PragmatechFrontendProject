import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import BeDriver from "./components/BeDriver"
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/beDriver" element={<BeDriver />} />
      </Routes>


    </div>
  );
}

export default App;
