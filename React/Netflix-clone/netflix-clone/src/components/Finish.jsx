import React from 'react';
// import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Name } from '../components/Stepthree';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../css/Finish.css"
const Finish = () => {
//  const {name} = useContext(Name)
const {name,plan}=useLocation().state;
const navigate = useNavigate();
    return (
             <div style={{color:"white"}}>
               <div className="success">
                   <h2>Congratulations, <span style={{color:"red"}}>{name}!</span></h2>
                   <h1>You've registered for the <span style={{color:"red"}}>{plan}</span> plan,
                    but don't worry, we wont charge you until your trials up.</h1>
                    <button className='brows' onClick={()=>navigate("/")}>START BROWSING</button>
               </div>
            </div>
    );
}

export default Finish;
