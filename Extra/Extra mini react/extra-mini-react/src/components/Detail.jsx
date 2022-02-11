import  {useEffect ,useState} from 'react';
import {useParams} from "react-router-dom"


const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(response =>{
        return response.json()
      }).then(information => setData(information))
    }, [id]);

   
    return (
        <div>
        {data ? <div>
          <h1>{data.id}</h1>
          <h1>{data.title}</h1>
           <p>{data.body}</p>
        </div> : undefined}
    
        </div>
    );
}

export default Detail;
