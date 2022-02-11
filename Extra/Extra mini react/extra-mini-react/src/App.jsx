
import {Routes,Route } from "react-router-dom"
import MainPage from './components/MainPage';
import Detail from "./components/Detail"


function App() {
return <div>
  
  <Routes>
    <Route path={'/'} element = {<MainPage/>} />
    <Route path={'/detail/:id'} element = {<Detail/>} />
  </Routes>
</div>

}

export default App;
