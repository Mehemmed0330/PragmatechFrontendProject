import React, { useEffect,  useState } from 'react'
import { useSelector } from 'react-redux'
import useSearchApi from '../hook/useSearchApi'
import { SelectSearch } from '../redux/slices/search'
// import { AiOutlinePlus } from 'react-icons/ai'
// import Modal from '../Modal'
// import Select from 'react-select';
// import { SelectList } from '../redux/slices/lists'

export default function Search() {
    // const lists = useSelector(SelectList)

    const [results, setResult] = useState([])
    // const [modal, setModal] = useState(false)
    // const [id, setId] = useState(0)

    const search = useSelector(SelectSearch)

    const { search: searchMethod} = useSearchApi()

    useEffect(() => {
        if (search) {
            searchMethod(search).then(s => setResult(s.results))
        }
    }, [search])


    // const selectedMovie = useRef(0)
    // const selectedType = useRef(0)
    // const setMovie = (selectedMovieId, type) => {

    //     selectedMovie.current = selectedMovieId
    //     selectedType.current = type
    //     setModal(true)
    // }
  return (
      <div style = {{display:"flex" , justifyContent:"center" , flexWrap:"wrap" , width:"1200px",alignItems:"center",gap:"20px" , margin:"0px auto" }}>
          {results.map(s =>
                <div key={s.id} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${s.backdrop_path})`,
                    backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: "200px",
                    width:"250px",
                    gap:"20px",
                    position:"relative"
                }}>
                    <div style={{position:"absolute" , bottom:"0" , opacity:"0.5" , backgroundColor:"black" , color:"white" , width:"100%"}} >{s.title ?? s.name}</div>
                    
                </div>
            )}
    </div>
  )
}
