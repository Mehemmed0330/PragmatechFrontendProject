import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App';


const Detail = () => {
    const alldata = useContext(context);
    const {catagoryid,id} = useParams();
    const data = alldata?.find(w=>w.id==catagoryid)?.movies?.find(w=>w.id==id)
    console.log(data)
    return (
        <div>
            {data.id}
        </div>
    );
}

export default Detail;
