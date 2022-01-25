import './App.css';
import {Routes,Route} from "react-router-dom"
import List from "./components/List"
import Firstuser from "./components/Firstuser"
import {useState} from "react"



function App() {
 
  return (
    <div>
      <List/>
      <Routes>
        <Route path='/:id' element = {<Firstuser/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
