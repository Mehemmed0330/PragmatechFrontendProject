import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Steptwo from "./components/Steptwo"
import Stepone from "./components/Stepone"
import Stepthree from "./components/Stepthree"
import Finish from "./components/Finish"
import Detail from "./components/Detail"
import {Routes,Route} from "react-router-dom"
import minislider1 from "./image/slider1.jpg"
import minislider2 from "./image/minislider2.jpg"
import minislider3 from "./image/minislider3.jpg"
import minislider4 from "./image/minislider4.jpg"
import minislider5 from "./image/minislider5.jpg"
import minislider6 from "./image/minislider6.jpg"
import minislider7 from "./image/minislider7.jpg"
import { createContext } from 'react';
export const context =  createContext();



function App() {
  
  return (
    <context.Provider value={allData}>
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
        <Route path ='/stepthree/' element = {<Stepthree/>}/>
        <Route path ='/finish' element={<Finish/>} />
        <Route path='/detail/:catagoryid/:id' element = {<Detail/>}/>
      </Routes>
    </div>
    </context.Provider>
  );

}

export default App;
  const allData =[
        {   id:1,
            catagoryName:"Action",
            movies:[
                {   id:1,
                    miniimage:minislider1,
                    categorie:"Trending Now"
                },
                {   id:2,
                    miniimage:minislider2,
                },
                {
                    id:3,
                    miniimage:minislider3
                },  
                {
                    id:4,
                    miniimage:minislider4
                },
                {
                    id:5,
                    miniimage:minislider5
                },
                {
                    id:6,
                    miniimage:minislider6
                },
                {
                    id:7,
                    miniimage:minislider7
                }
            ]
        },
        {   id:2,
            catagoryName:"Action",
            movies:[
                {   id:1,
                    miniimage:minislider1,
                    categorie:"Trending Now"
                },
                {   id:2,
                    miniimage:minislider2,
                },
                {
                    id:3,
                    miniimage:minislider3
                },  
                {
                    id:4,
                    miniimage:minislider4
                },
                {
                    id:5,
                    miniimage:minislider5
                },
                {
                    id:6,
                    miniimage:minislider6
                },
                {
                    id:7,
                    miniimage:minislider7
                }
            ]
        },
        {   id:3,
            catagoryName:"Action",
            movies:[
                {   id:1,
                    miniimage:minislider1,
                    categorie:"Trending Now"
                },
                {   id:2,
                    miniimage:minislider2,
                },
                {
                    id:3,
                    miniimage:minislider3
                },  
                {
                    id:4,
                    miniimage:minislider4
                },
                {
                    id:5,
                    miniimage:minislider5
                },
                {
                    id:6,
                    miniimage:minislider6
                },
                {
                    id:7,
                    miniimage:minislider7
                }
            ]
        }
    ]