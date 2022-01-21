import './App.css';
import {Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Contact from "./components/Contact"
import Team from "./components/Team"


function App() {
  return (
    <div>
      <Navbar/>
      <div className="content" >
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/team' element = {<Team/>}/>

        </Routes>
      </div>
       

     
    </div>
  );
}

export default App;
