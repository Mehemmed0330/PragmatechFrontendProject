import React, { useEffect,  useState , useRef } from 'react'
import { useSelector } from 'react-redux'
import useSearchApi from '../hook/useSearchApi'
import { SelectSearch } from '../redux/slices/search'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../Modal'
import Select from 'react-select';
import { SelectList } from '../redux/slices/lists'

export default function Search() {
    const lists = useSelector(SelectList)

    const [results, setResult] = useState([])
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(0)

    const search = useSelector(SelectSearch)

    const { search: searchMethod, addToList } = useSearchApi()

    useEffect(() => {
        if (search) {
            searchMethod(search).then(s => setResult(s.results))
        }
    }, [search])


    const selectedMovie = useRef(0)
    const selectedType = useRef(0)
    const setMovie = (selectedMovieId, type) => {

        selectedMovie.current = selectedMovieId
        selectedType.current = type
        setModal(true)
    }
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
                    <div style = {{}}>
                        <div style = {{position:"absolute" , top:"50%" , translate:"-50% , -50%" , zIndex:"100"}} onClick={e => {
                            console.log(s)
                            setMovie(s.id, s["media_type"])
                        }}>
                            <AiOutlinePlus size={"32px"} style = {{color:"white" , cursor:"pointer"}} />
                        </div>
                    </div>
                </div>
            )}
            {modal &&
                <Modal>
                    <div style = {{padding:"24px" , backgroundColor:"black" , display:"flex" , flexDirection:"column" , justifyContent:"center" , gap:"10px"}}>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            name="list"
                            options={lists.map(w => ({ value: w.id, label: w.name }))}
                            onChange={(e) => {
                                setId(e.value)
                            }}
                        />
                        <button className="text-white" onClick={async () => {
                            const res = await addToList(id, selectedMovie.current, selectedType.current)
                            alert(res ? "Added to list" : "Failed to add to list")
                        }}>
                            Add to list
                        </button>
                    </div>
                </Modal>}
          
        </div>
    )
}
