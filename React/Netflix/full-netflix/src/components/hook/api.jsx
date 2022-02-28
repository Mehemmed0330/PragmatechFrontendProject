import axios from 'axios'
import {useState,useEffect} from "react"
const instanceV4 = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U'
    }
})

const instanceV3 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout:5000
})

export default function useAPI() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (
            async () => {
                const arr = []
                const AllLists = await getAllList()
                for (const list of AllLists.results) {
                    const l = await getList(list.id)
                    if (l.results.length > 0) {
                        arr.push(l.results)
                    }
                    
                }
                setMovies(arr)
            }
        )()
    }, []);


    const getAllList = async () => {
        const response = await instanceV4.get("/account/5f198024a6d931003787052f/lists");
        return response.data
   }

    const getList = async (id) => {
        const response = await instanceV4.get("/list/" +id)
        return response.data
   }
  
    
    return {movies}
}
