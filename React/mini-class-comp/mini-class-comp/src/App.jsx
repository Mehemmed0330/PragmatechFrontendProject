import React , {Component} from "react"
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import { Routes,Route } from "react-router-dom";


export default class App extends Component{
  render = () =>(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />

      </Routes>
      
    </div>
  );
}