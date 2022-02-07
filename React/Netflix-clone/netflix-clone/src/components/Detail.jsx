import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App';


const Detail = () => {
    const alldata = useContext(context);
    const {catagoryid,id,name} = useParams();
    const data = alldata?.find(w=>w.id=catagoryid)?.movies?.find(w=>w.id=id,name)
    



    console.log(data)
    return (
        <div>
            {data.name}
        </div>
    );
}

export default Detail;
