import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Register from "./components/Register"
import Register2 from "./components/Register2"
import Register3 from "./components/Register3"
import Success from "./components/Success"
import  Detail from "./components/Detail"
import { Routes, Route ,useLocation , useNavigate} from "react-router-dom"
import useAPI from './components/hook/api';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectSearch } from './components/redux/slices/search';
import Search from './components/Home/search';


function App() {
  useAPI()

  const search = useSelector(SelectSearch)
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    if (search && !location.pathname.includes("search")) {
      navigate("/search")
    } else if (!search && location.pathname.includes("search")) {
      navigate("/")
    }
  }, [search])
  return (
    <div className="view">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path ="/registration" element = {<Register/>}/>
        <Route path = "/registration2" element = {<Register2/>}/>
        <Route path = "/registration3" element = {<Register3/>}/>
        <Route path = "/success" element = {<Success/>}/>
        <Route path = "/detail/:type/:id" element = {<Detail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
