
import Got from "../components/Got"
import {useState , useEffect} from "react"

const UseFetch = () => {
    const [data, setData] = useState({
        slug:"",
        results:[],
    });

    useEffect(() => {
        if(data.slug !== ""){
            const timeoutId = setTimeout(() => {
                const fetch = async () =>{
                    try {
                        const res = await Got.get(`/${data.slug}`);
                        setData({ ...data, results: res.data });
                    } catch (error) {
                        console.log(error)
                    }
                }
                fetch()
            },1000)
            return () => clearTimeout(timeoutId)

        }
    }, [data]);

    return { data, setData };
};

export default UseFetch;

