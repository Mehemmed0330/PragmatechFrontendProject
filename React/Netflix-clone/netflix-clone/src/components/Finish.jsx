import React from 'react';
// import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Name } from '../components/Stepthree';
import { useLocation } from 'react-router-dom';



const Finish = () => {
//  const {name} = useContext(Name)
const {name,plan}=useLocation().state
    return (
             <div>
                {name}
                {plan}
            </div>
       
    );
}

export default Finish;
