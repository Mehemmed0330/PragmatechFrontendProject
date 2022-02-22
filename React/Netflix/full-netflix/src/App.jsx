import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Register from "./components/Register"
import Register2 from "./components/Register2"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="view">
      <Header/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/registration" element = {<Register/>}/>
        <Route path = "/registration2" element = {<Register2/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
