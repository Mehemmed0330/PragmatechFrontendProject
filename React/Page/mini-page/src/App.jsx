import './App.css';
import {Routes,Route} from "react-router-dom"
import List from "./components/List"
import Firstuser from "./components/Firstuser"




function App() {
  

  return (
    <div style={{display:"flex",gap:"30px"}}>
      <List />
     <Routes>
        <Route path="/detail/:id/:name/:surname/:email/:street/:suite/:city/:zipcode/:lat/:lng/:phone/:website/:company/:catchPhrase/:bs" element={<Firstuser/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
