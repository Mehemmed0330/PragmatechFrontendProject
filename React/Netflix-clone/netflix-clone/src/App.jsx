import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Steptwo from "./components/Steptwo"
import Stepone from "./components/Stepone"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div style={{
      maxWidth:"1200px",
      margin:"0px auto",
      padding: "0px 48px",
    }}>
      <Header/>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/stepone' element = {<Stepone/>}/>
        <Route path='/steptwo' element ={<Steptwo/>} />
      </Routes>

    </div>
  );
}

export default App;
