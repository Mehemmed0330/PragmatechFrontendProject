import headerPost from "../App"
import {useState} from "react"

const UseCreate = () => {
    const [isLoading, setLoading] = useState(false);
    const CreateList = (name) => {
        setLoading(true)
        fetch("https://api.themoviedb.org/4/list", {
            headers: headerPost,
            method: 'POST',
            body: JSON.stringify({
                name,
                "iso_639_1": "en",
            })
        }).then(e => e.json()).then(e => {
            setLoading(false)
            alert(name + " adli list yarandi!")
        }).catch(e => { setLoading(false) })
    }
    


    return {isLoading,CreateList}
}

export default UseCreate;
