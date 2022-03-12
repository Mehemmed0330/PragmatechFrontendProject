import axios from 'axios'
import {useState,useEffect} from "react"
import { useDispatch } from 'react-redux';
import { setLists } from '../redux/slices/lists'
export const instanceV4 = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U'
    }
})
export const instanceV4Post = axios.create({
    baseURL: 'https://api.themoviedb.org/4',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U'
    }
})
export const instanceV3 = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout:5000,
    params: {
        "api_key": "285a107f0c92cfda467db221ccc502f7"
    }
})

export default function useAPI() {
    // const [list, setList] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        (
            async () => {
                const listArr = []
                const AllLists = await getAllList()
                for (const list of AllLists.results) {
                    const l = await getList(list.id)
                    if (l.results.length > 0) {
                        listArr.push(l)
                    }
                    
                }
                dispatch(setLists(listArr))
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
  
    
    return {getList}
}
